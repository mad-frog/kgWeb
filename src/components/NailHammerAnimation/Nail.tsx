import React from 'react';

interface NailProps {
  width: number;
  height: number;
  color?: string;
}

export default class Nail extends React.Component<NailProps> {
  render () {
    const color = this.props.color ? this.props.color : "#dedede";

    return (
      <svg version="1.1" id="Layer_1" x="0px" y="0px"
  width={this.props.width + "px"} height={this.props.height + "px"} viewBox="0 0 55.333 238.333" enableBackground="new 0 0 55.333 238.333">
    <polygon fill={color} points="17.729,17.949 17.729,217.949 27.729,233.261 37.729,217.949 37.729,17.949 "/>
    <g>
      <path fill={color} d="M47.833,13.949c0,2.2-1.8,4-4,4h-0.917c-2.2,0-4.281,0-4.625,0c-0.344,0-2.142,0.969-3.996,2.153
        l-3.091,1.975c-1.854,1.185-4.829,1.097-6.61-0.194l-2.189-1.587c-1.781-1.291-3.562-2.347-3.958-2.347c-0.395,0-0.986,0-1.312,0
        s-2.394,0-4.594,0h-0.708c-2.2,0-4-1.8-4-4v-2c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V13.949z"/>
    </g>
    </svg>
    );
  }
}
