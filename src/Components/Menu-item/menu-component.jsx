import React from "react";
import "./menu-styles.scss";
const MenuItem = ({ section }) => (
  <div className={`${section.size} menu-item`}>
    <div
      className=" background-image"
      style={{ background: `url(${section.imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{section.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;