import "./Navbar.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();
  const [isMenu, setIsMenu] = useState(false);
  const [isTopScreen, setIsTopSreen] = useState(true);

  function hideMenu() {
    setIsMenu(false);
  }

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY > 0) setIsTopSreen(false);
      else setIsTopSreen(true);
    };
    window.addEventListener("scroll", changeNavbarBg);
    return () => window.removeEventListener("scroll", changeNavbarBg);
  }, []);

  useEffect(() => {
    isMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenu]);

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          !isTopScreen ? "navbar-scrolled" : ""
        } navbar slide-in-y shadow px-3 fixed-top z-3`}
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
            <Link onClick={hideMenu} to="/cennik">
              Cennik
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={hideMenu} to="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
