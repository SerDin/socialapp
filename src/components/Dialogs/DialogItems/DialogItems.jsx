import React from "react";
import s from "./DialogItems.module.css";
import { NavLink } from "react-router-dom";

const DialogItems = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItems;
