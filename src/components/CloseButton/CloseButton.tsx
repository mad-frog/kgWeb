import React from 'react';
import styles from './closebutton.module.scss';


interface IState {
  animate: boolean;
}

interface IProps {
  onClick: Function;
  size: number;
  lineWidth?: number;
  color?: string;
}

export default class CloseButton extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    animate: false
  }

  componentDidMount () {
    this.setState({ animate: !this.state.animate })
  }

  onClick = (event: React.MouseEvent) => {
    this.props.onClick();
  }

  render () {
    const size = `${this.props.size}px`;
    const animate = this.state.animate ? styles.animate: '';
    const style = this.props.color ? { backgroundColor: this.props.color } : {};

    return <div className={styles[`click-area`]} style={{ width: size, height: size }} onClick={this.onClick}>
      <div className={`${styles.container} ${animate}`}>
        <div className={`${styles.fullLine} ${styles.left}`}><div className={`${styles.item}`} style={style} /></div>
        <div className={`${styles.fullLine} ${styles.right}`}><div className={`${styles.item}`} style={style} /></div>
        <div className={`${styles.fullLine}  ${styles.top}`}><div className={`${styles.item}`} style={style} /></div>
        <div className={`${styles.fullLine} ${styles.bottom}`}><div className={`${styles.item}`} style={style} /></div>
      </div>
    </div>
  }
}