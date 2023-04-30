import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();
  const [isMenu, setIsMenu] = useState(false);

  function hideMenu() {
    setIsMenu(false);
  }

  function scrollToBottom() {
    hideMenu();
    window.scrollTo(0, document.body.scrollHeight);
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
        style={{ height: "60px" }}
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
          className="d-lg-none"
        >
          <i
            className={`bi ${isMenu ? "bi-x-lg" : "bi-list"}`}
            style={{ fontSize: "25px" }}
          ></i>
        </button>
        <ul
          className={`${
            isMenu ? "active" : ""
          } navbar-nav text-center d-flex flex-column flex-lg-row justify-content-evenly justify-content-lg-center gap-lg-5`}
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
          <li className="nav-item" onClick={() => scrollToBottom()}>
            <span style={{ cursor: "pointer" }}>Kontakt</span>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
