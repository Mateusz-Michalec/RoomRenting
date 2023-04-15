import "./Home.scss";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useIsDesktop from "../../customHooks/useIsDesktop";
import RoomCards from "../../components/RoomCards/RoomCards";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Footer from "../../components/Footer/Footer";
import mobileBg from "../../assets/img/heroBgMobile.png";
import { useInView } from "../../customHooks/useInView";

export default function Home() {
  // Refs
  const homeShortDesc = useRef();
  const homeHeaderRooms = useRef();
  const roomCards = useRef();
  const homeHeaderAttractions = useRef();
  const homeAttractions = useRef();

  // Custom Hooks
  const intersection = useInView([
    homeShortDesc,
    homeHeaderRooms,
    roomCards,
    homeHeaderAttractions,
    homeAttractions,
  ]);
  const isDesktop = useIsDesktop();

  const [bgSrc, setBgSrc] = useState(mobileBg);

  useEffect(() => {
    if (isDesktop)
      import("../../assets/video/heroBgDesktop.mp4").then((src) =>
        setBgSrc(src.default)
      );
    else setBgSrc(mobileBg);
  }, [isDesktop]);

  useEffect(() => {
    if (intersection.homeShortDesc)
      homeShortDesc.current.querySelectorAll("p").forEach((el) => {
        el.classList.add("fade-in-x");
      });
    if (intersection.homeHeaderRooms)
      homeHeaderRooms.current.classList.add("fade-in");
    if (intersection.roomCards)
      roomCards.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("fade-in-x");
      });
    if (intersection.homeHeaderAttractions)
      homeHeaderAttractions.current.classList.add("fade-in");
    if (intersection.homeAttractions)
      homeAttractions.current
        .querySelectorAll("div")
        .forEach((el) => el.classList.add("fade-in-y"));
  }, [intersection]);

  return (
    <>
      <header className="hero position-relative vh-100 vw-100">
        <div className="hero-body fade-in-hero shadow-lg position-absolute py-4 vw-100 text-center">
          <h1 className="brand">GórskaDolina</h1>
          <p className="m-0">Pokoje gościnne w Bieszczadach</p>
          <button type="button" className="mt-3 mb-1 btn-outline-gd">
            Wolne terminy 2023
          </button>
        </div>
        {isDesktop ? (
          <video src={bgSrc} autoPlay loop muted />
        ) : (
          <img alt="Górska dolina" src={bgSrc} />
        )}
      </header>
      <article
        ref={homeShortDesc}
        className="p-5 bg-white-1"
        id="homeShortDesc"
      >
        <p>
          <strong className="brand">GórskaDolina</strong> to urokliwy zakątek
          otoczony Bieszczadami. Nasze komfortowe pokoje z łazienkami oraz w
          pełni wyposażone apartamenty są idealnym miejscem dla osób szukających
          wypoczynku wśród malowniczej przyrody.
        </p>
        <p>
          W okolicy można znaleźć liczne szlaki turystyczne, stoki narciarskie
          oraz atrakcje dla miłośników aktywnego wypoczynku. Naszym gościom
          oferujemy również pyszną kuchnię regionalną oraz domową atmosferę,
          dzięki czemu pobyt w Górskiej Dolinie na długo pozostanie w ich
          pamięci.
        </p>
      </article>
      <section className="p-5">
        <header ref={homeHeaderRooms} id="homeHeaderRooms">
          <h2 className="mb-2">Pokoje dla każdego</h2>
          <p>Wygodne i przytulne pokoje gościnne w samym sercu Bieszczadów.</p>
        </header>
        <RoomCards ref={roomCards} />
      </section>
      <section className="p-5 bg-white-1 container-fluid">
        <header ref={homeHeaderAttractions} id="homeHeaderAttractions">
          <h2 className="mb-4">Moc atrakcji</h2>
          <p>
            W Górskiej Dolinie oraz w okolicy, można doznać wielu przygód i
            atrakcji - zarówno dla dzieci jak i dla dorosłych.
          </p>
        </header>
        <div ref={homeAttractions} className="row mt-4" id="homeAttractions">
          <div className="col-12 d-flex flex-column align-items-center py-2 shadow">
            <i className="bi bi-bicycle icon-big"></i>
            <h6>Malownicze trasy rowerowe</h6>
          </div>
          <div className="col-12 d-flex flex-column align-items-center py-2 shadow">
            <i className="bi bi-signpost-split icon-big"></i>
            <h6>Liczne szlaki turystyczne</h6>
          </div>
          <div className="col-12 d-flex flex-column align-items-center py-2 shadow">
            <i className="bi bi-card-image icon-big"></i>
            <h6>Wycieczki krajoznawcze</h6>
          </div>
          <div className="col-12 d-flex flex-column align-items-center py-2 shadow">
            <i className="bi bi-tree icon-big"></i>
            <h6>Bliskość pomników przyrody</h6>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn-outline-reversed mt-4">
            Więcej atrakcji
          </button>
        </div>
      </section>
      <GoogleMap />
      <Footer />
    </>
  );
}
