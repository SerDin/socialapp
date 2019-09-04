import React from "react";
import s from "./Messages.module.css";

const Messages = props => {
  return <div className="message">{props.message}</div>;
};

export default Messages;
