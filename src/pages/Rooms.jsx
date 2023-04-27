import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import heroImg from "../assets/img/rooms-hero.jpg";
import room0 from "../assets/img/room-0-0.jpg";
import room1 from "../assets/img/room-1-0.jpg";
import room2 from "../assets/img/room-2-0.jpg";
import { useInView } from "../hooks/useInView";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { showGroupElements } from "../utils/animate";

const RoomCategory = lazy(() => import("../components/RoomCategory"));

export default function Rooms() {
  const roomCategories = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("kategoria");
  const intersection = useInView([roomCategories], 1, category);

  useEffect(() => {
    if (intersection.roomCategories) showGroupElements(roomCategories, "div");
  }, [intersection, category]);

  const renderRooms = () => {
    if (category === null) {
      return (
        <section
          ref={roomCategories}
          id="roomCategories"
          className="animation-delays"
        >
          <RoomCard
            id="dwuosobowe"
            title="Pokoje dwuosobowe"
            onClick={(e) => setSearchParams({ kategoria: e.currentTarget.id })}
            img={room0}
          />
          <RoomCard
            id="czteroosobowe"
            title="Pokoje czteroosobowe"
            onClick={(e) => setSearchParams({ kategoria: e.currentTarget.id })}
            img={room1}
          />
          <RoomCard
            id="premium"
            title="Pokoje Premium"
            onClick={(e) => setSearchParams({ kategoria: e.currentTarget.id })}
            img={room2}
          />
        </section>
      );
    } else if (category === "dwuosobowe") {
      return (
        <Suspense fallback={<div className="loader" />}>
          <RoomCategory category={category} />
        </Suspense>
      );
    }
    // else if(category==="Pokoje 3-4 osobowe")
    // else
  };

  return (
    <>
      <section className="vh-100 vw-100" style={{ clipPath: "inset(0)" }}>
        <div className="light-overlay"></div>
        <img src={heroImg} className="img-hero img-zoom" alt="Pokój gościnny" />
        <header className="hero-body fade-in-hero">
          <h1 className="header">Przytulne pokoje</h1>
          <p>Pokoje w Bieszczadach</p>
          <i className="bi bi-chevron-compact-down arrow-down mt-5 d-block"></i>
        </header>
      </section>
      <section className="p-5">
        <header className="d-flex align-items-center justify-content-between">
          <h2>{category !== null ? category : "Nasza oferta"}</h2>
          {category !== null ? (
            <button type="button" onClick={() => setSearchParams({})}>
              <i className="bi bi-arrow-left-circle fs-2"></i>
            </button>
          ) : null}
        </header>
        {renderRooms()}
      </section>
      <Footer />
    </>
  );
}
