import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();
  const [isMenu, setIsMenu] = useState(false);

  function hideMenu() {
    setIsMenu(false);
  }

  useEffect(() => {
    isMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenu]);

  return (
    <>
      <nav
        ref={navRef}
        className="
        navbar fade-in shadow px-3 fixed-top z-3"
      >
        <Link to="/" className="brand">
          GórskaDolina
        </Link>
        <button
          type="button"
          aria-label="Rozwiń menu"
          aria-expanded="false"
          aria-controls="menu"
          onClick={() => setIsMenu((prev) => !prev)}
        >
          <i className={`bi ${isMenu ? "bi-x-lg" : "bi-list"} fs-1`}></i>
        </button>
        <ul
          className={`${
            isMenu ? "active" : ""
          } navbar-nav shadow-lg text-center d-flex flex-column justify-content-evenly`}
        >
          <li className="nav-item">
            <Link onClick={hideMenu} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={hideMenu} to="/pokoje">
              Pokoje
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={hideMenu} to="/atrakcje">
              Atrakcje
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={hideMenu} to="/galeria">
              Galeria
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={hideMenu} to="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
