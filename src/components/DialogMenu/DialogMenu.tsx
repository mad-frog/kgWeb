import React from "react";
import './dialogmenu.scss';
import CloseButton from '../../components/CloseButton';
import { ThemeModes } from '../../App';

interface Props {
  children: React.ReactNode,
  visible: boolean,
  toogleMenu: Function,
  animate: boolean,
  themeMode: string,
}

export default class DialogMenu extends React.Component<Props> {
  toogleMenu = () => {
    this.props.toogleMenu()
  }

  handleContentClick (event: React.MouseEvent) {
    event.stopPropagation();
  }

  render () {
    const visible = this.props.visible ? 'visible' : 'hidden';
    const animateClass = this.props.animate ? `menu-animate${this.props.themeMode}` : '';
    const menuOpenClass = this.props.visible ? 'menu-open' : '';
    const closeButtonColor = this.props.themeMode === ThemeModes.dark ? '#fb8716' : '#1d1b1a';

    return <div className={`dialog-menu-background ${visible}`}  onClick={this.toogleMenu}>
      <div className={`menu ${menuOpenClass} ${animateClass}`} onClick={this.handleContentClick}>
        <div className="close-btn">
          <CloseButton onClick={this.toogleMenu} size={30} color={closeButtonColor} />
        </div>
        <div className="children-container">
          {this.props.children}
        </div>
      </div>
    </div>
  }
}