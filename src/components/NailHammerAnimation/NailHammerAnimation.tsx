import React from 'react';
import Nail from './Nail';
import Hammer from './Hammer';
import './nail-hammer-animation.scss';

interface IProps {
  label: string;
  animate?: boolean;
  darkMode?: boolean;
}

interface HammerProperties {
  rotation: number;
  top: number;
  left: number;
}

interface AnimationState {
  hammer: HammerProperties;
  nail: {
    top: number;
  };
  timerOn: boolean;
  timer: number;
}

const animationCycleHammer = [
  { rotation: -45, top: 10, left: 90 },
  { rotation: -90, top: 50, left: 60 },
  { rotation: -45, top: 10, left: 90 },
  { rotation: -90, top: 62, left: 60 },
  { rotation: -45, top: 10, left: 90 },
  { rotation: -90, top: 74, left: 60 },
  { rotation: -45, top: 10, left: 90 },
];

const animationCycleNail = [ 110, 122, 122, 134, 134, 146, 146 ];

export default class NailHammerAnimation extends React.Component<IProps, AnimationState> {
  private timer: number = 0;

  state = {
    hammer: animationCycleHammer[0],
    nail: { top: animationCycleNail[0]},
    timerOn: false,
    timer: 0
  }

  componentDidMount () {
    this.setState({
      timerOn: true
    });

    this.timer = window.setInterval(() => {
      this.animateHammer();
    }, 500);
  }

  componentWillUnmount = () => {
    this.pauseAnimation();
  }

  resetInterval = () => {
    this.setState({
      timer: 0,
    });
  }

  pauseAnimation = () => {
    this.setState({
      timerOn: false
    });

    clearInterval(this.timer);
  }

  animateHammer = () => {
    if (!this.props.animate) {
      this.pauseAnimation();
      return;
    }

    if (this.state.timerOn) {
      this.setState({
        timer: this.state.timer + 1,
        hammer: animationCycleHammer[this.state.timer],
        nail: {
          top: animationCycleNail[this.state.timer]
        }
      });
    }

    if (this.state.timer === 7) {
      this.resetInterval();
    }
  }

  render() {
    const hammerStyle = {
      top: this.state.hammer.top + "px",
      left: this.state.hammer.left + "px",
      transform: `rotate(${this.state.hammer.rotation}deg)`,
    } as React.CSSProperties;

    const nailStyle = {
      top: `${this.state.nail.top}px`,
    } as React.CSSProperties;

    const label = this.props.label.toUpperCase();
    const newColor = this.props.darkMode ? "#dedede" : "black";

    return (
      <div className="hammer-scene">
        <div className="nail" style={nailStyle}><Nail width={40} height={40} color={newColor} /></div>
        <div className="hammer" style={hammerStyle}><Hammer color={newColor} /></div>
        <div className="scene-label-container" style={{ borderColor: newColor }}>
          <div className="scene-label" style={{ backgroundColor: newColor }}>{label}</div>
        </div>
      </div>
    )
  }
}