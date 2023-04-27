import React from "react";

export default function IconText({ icon, text }) {
  return (
    <div className="col-12 d-flex flex-column align-items-center hidden-y-top">
      <i className={`bi bi-${icon} icon-big`}></i>
      <h6>{text}</h6>
    </div>
  );
}
