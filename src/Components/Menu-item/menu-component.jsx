import React from "react";
import "./menu-styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ section,history }) => (
  <div onClick={()=> history.push(`/${section.linkUrl}`)} className={`${section.size} menu-item`}>
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
export default withRouter(MenuItem);
