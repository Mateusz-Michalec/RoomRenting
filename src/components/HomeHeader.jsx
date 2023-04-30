import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const HomeHeader = forwardRef(
  ({ id, header, desc, img, imgAlt, route, buttonText }, ref) => (
    <header
      ref={ref}
      id={id}
      className="hidden-opacity col-12 col-lg-6 text-center"
    >
      <h2 className="mb-4">{header}</h2>
      <img
        src={img}
        alt={imgAlt}
        className="shadow rounded-circle d-block mx-auto"
        style={{ objectFit: "cover", height: "15rem", width: "15rem" }}
      />
      <p className="mt-3">{desc}</p>
      <button className="btn-outline-reversed mt-3 mx-auto d-block">
        <Link to={`/${route}`}>{buttonText}</Link>
      </button>
    </header>
  )
);

export default HomeHeader;
