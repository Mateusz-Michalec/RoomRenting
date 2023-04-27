import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const HomeHeader = forwardRef(
  ({ id, header, desc, img, imgAlt, route, buttonText }, ref) => (
    <header ref={ref} id={id} className="hidden-opacity col-12">
      <h2 className="mb-2">{header}</h2>
      <p>{desc}</p>
      <img
        src={img}
        alt={imgAlt}
        className="shadow rounded-circle d-block mx-auto"
        style={{ objectFit: "cover", height: "15rem", width: "15rem" }}
      />
      <button className="btn-outline-reversed mt-4 mx-auto d-block">
        <Link to={`/${route}`}>{buttonText}</Link>
      </button>
    </header>
  )
);

export default HomeHeader;
