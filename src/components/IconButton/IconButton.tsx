import React from "react";
import './iconbutton.scss';

interface IProps {
  class?: string,
  icon: React.ReactNode,
  label: string,
  onClick: () => void
}

export const IconButton = (props: IProps) => {
  return <button className={`${props.class} icon-button`} onClick={props.onClick}>
    {props.icon}
    <div className="icon-label">{props.label}</div>
  </button>
}