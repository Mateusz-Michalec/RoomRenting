import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="container-fluid p-5">
      <h5 className="brand text-center mb-4">GórskaDolina</h5>
      <div className="row gy-2">
        <div className="col-12 d-flex flex-column ">
          <i className="bi bi-telephone"></i> <p>550 234 214</p>
        </div>

        <div className="col-12 d-flex flex-column ">
          <i className="bi bi-envelope "></i> <p>gorskadolina@gmail.com</p>
        </div>

        <div className=" col-12d-flex flex-column ">
          <i className="bi bi-geo-alt"></i> <p>Polana 59A, 38-709</p>
        </div>

        <div className=" col-12d-flex flex-column ">
          <i className="bi bi-facebook"></i> <p>GórskaDolina</p>
        </div>
      </div>
      <p className="copyright mt-3 mb-0 text-center">2023 © MatthewDevv </p>
    </footer>
  );
}
