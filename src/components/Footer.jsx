import React from "react";

export default function Footer() {
  return (
    <footer className="p-5 bg-dark text-white text-center">
      <h5 className="brand mb-0 ">GórskaDolina</h5>
      <p className="copyright mb-5  opacity-25" style={{ fontSize: "0.8rem" }}>
        2023 © MatthewDevv{" "}
      </p>
      <div className="row text-sm-center gy-5">
        <div className="col-12 col-sm-6 col-xl-3 d-flex flex-column ">
          <i className="bi bi-telephone"></i> <p>550 234 214</p>
        </div>

        <div className="col-12 col-sm-6 col-xl-3  d-flex flex-column ">
          <i className="bi bi-envelope "></i> <p>gorskadolina@gmail.com</p>
        </div>

        <div className=" col-12 col-sm-6 col-xl-3  d-flex flex-column ">
          <i className="bi bi-geo-alt"></i> <p>Polana 59A, 38-709</p>
        </div>

        <div className=" col-12 col-sm-6 col-xl-3 d-flex flex-column ">
          <i className="bi bi-facebook"></i> <p>GórskaDolina</p>
        </div>
      </div>
    </footer>
  );
}
