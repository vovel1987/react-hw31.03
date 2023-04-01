import React from "react";
import { NavLink } from "react-router-dom";
import s from './style.module.css'

export default function Nav() {
  const links = [
    { id: 1, label: "Add Product", to: "/" },
    { id: 2, label: "Show Product", to: "/product" },
  ];
  return (
    <div className={s.container} >
      {links.map(({ id, label, to }) => (
        <NavLink className={s.link} key={id} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}
