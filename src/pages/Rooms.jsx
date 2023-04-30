import React, { Suspense, lazy, useEffect, useRef } from "react";
import heroImg from "../assets/img/rooms-hero.jpg";
import room0 from "../assets/img/room-0-0.jpg";
import room1 from "../assets/img/room-1-0.jpg";
import room2 from "../assets/img/room-2-0.jpg";
import { useInView } from "../hooks/useInView";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { showElement } from "../utils/animate";

const RoomCategory = lazy(() => import("../components/RoomCategory"));

export default function Rooms() {
  const cat1 = useRef();
  const cat2 = useRef();
  const cat3 = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("kategoria");
  const intersection = useInView([cat1, cat2, cat3], 3, category);

  useEffect(() => {
    if (intersection.dwuosobowe) showElement(cat1);
    if (intersection.czteroosobowe) showElement(cat2);
    if (intersection.premium) showElement(cat3);
  }, [intersection, category]);

  const renderRooms = () => {
    if (category === null) {
      return (
        <section className="animation-delays row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
          <RoomCard
            id="dwuosobowe"
            ref={cat1}
            title="Pokoje dwuosobowe"
            onClick={(e) =>
              setSearchParams({ kategoria: e.currentTarget.closest(".col").id })
            }
            img={room0}
          />
          <RoomCard
            id="czteroosobowe"
            ref={cat2}
            title="Pokoje czteroosobowe"
            onClick={(e) =>
              setSearchParams({ kategoria: e.currentTarget.closest(".col").id })
            }
            img={room1}
          />
          <RoomCard
            id="premium"
            ref={cat3}
            title="Pokoje Premium"
            onClick={(e) =>
              setSearchParams({ kategoria: e.currentTarget.closest(".col").id })
            }
            img={room2}
          />
        </section>
      );
    } else if (category !== null) {
      return (
        <Suspense fallback={<div className="loader" />}>
          <RoomCategory category={category} />
        </Suspense>
      );
    }
  };

  return (
    <>
      <section
        className="position-relative vh-100 vw-100"
        style={{ clipPath: "inset(0)" }}
      >
        <div className="light-overlay"></div>
        <img src={heroImg} className="img-hero img-zoom" alt="Pokój gościnny" />
        <header className="hero-body fade-in-hero">
          <h1 className="header">Przytulne pokoje</h1>
          <p>Pokoje w Bieszczadach</p>
          <i className="bi bi-chevron-compact-down arrow-down mt-5 d-block"></i>
        </header>
      </section>
      <section className="p-5">
        <header className="d-flex align-items-center justify-content-between mb-5">
          <h2>{category !== null ? `Pokoje ${category}` : "Nasza oferta"}</h2>
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
