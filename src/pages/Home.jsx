import mobileBg from "../assets/img/heroBgMobile.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import useIsDesktop from "../hooks/useIsDesktop";
import GoogleMap from "../components/GoogleMap";
import Footer from "../components/Footer";
import roomImg from "../assets/img/room-0-0.jpg";
import attractionImg from "../assets/img/house.jpg";
import { showElement, showGroupElements } from "../utils/animate";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  // Refs
  const homeDesc = useRef();
  const homeRooms = useRef();
  const homeAttractions = useRef();

  // Custom Hooks
  const intersection = useInView([homeDesc, homeRooms, homeAttractions], 3);
  const isDesktop = useIsDesktop();

  const [bgSrc, setBgSrc] = useState(mobileBg);

  useEffect(() => {
    if (isDesktop)
      import("../assets/video/heroBgDesktop.mp4").then((src) =>
        setBgSrc(src.default)
      );
    else setBgSrc(mobileBg);
  }, [isDesktop]);

  useEffect(() => {
    if (intersection.homeDesc) showGroupElements(homeDesc, "p");
    if (intersection.homeRooms) showElement(homeRooms);
    if (intersection.homeAttractions) showElement(homeAttractions);
  }, [intersection]);

  const year = new Date().getFullYear();

  return (
    <>
      <section
        className="position-relative vh-100 vw-100"
        style={{ clipPath: "inset(0)" }}
      >
        <header
          className="hero-body fade-in-hero shadow-lg py-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.333)",
            backdropFilter: "blur(2px)",
          }}
        >
          <h1 className="brand">GórskaDolina</h1>
          <p className="m-0">Pokoje gościnne w Bieszczadach</p>
          <button type="button" className="mt-3 mb-1 btn-outline-gd">
            Rezerwacja pokoi {year}
          </button>
        </header>
        {isDesktop ? (
          <video src={bgSrc} className="img-hero" autoPlay loop muted />
        ) : (
          <img alt="Górska dolina" className="img-hero" src={bgSrc} />
        )}
      </section>
      <article ref={homeDesc} className="p-5 bg-white-1" id="homeDesc">
        <p className="hidden-x-left">
          <strong className="brand">GórskaDolina</strong> to urokliwy zakątek
          otoczony Bieszczadami. Nasze komfortowe pokoje z łazienkami oraz w
          pełni wyposażone apartamenty są idealnym miejscem dla osób szukających
          wypoczynku wśród malowniczej przyrody.
        </p>
        <p className="hidden-x-right">
          W okolicy można znaleźć liczne szlaki turystyczne atrakcje dla
          miłośników aktywnego wypoczynku. Naszym gościom oferujemy również
          pyszną kuchnię regionalną oraz domową atmosferę, dzięki czemu pobyt w
          Górskiej Dolinie na długo pozostanie w ich pamięci.
        </p>
      </article>
      <section className="p-5 row gap-5 mb-5">
        <HomeHeader
          id="homeRooms"
          ref={homeRooms}
          header="Pokoje dla każdego"
          desc="Wygodne i przytulne pokoje gościnne w samym sercu Bieszczadów."
          img={roomImg}
          route="pokoje"
          buttonText="Sprawdź ofertę"
        />
        <HomeHeader
          id="homeAttractions"
          ref={homeAttractions}
          header="Moc atrakcji"
          desc=" W Górskiej Dolinie oraz w okolicy, można doznać wielu przygód i
          atrakcji - zarówno dla dzieci jak i dla dorosłych."
          img={attractionImg}
          route="atrakcje"
          buttonText="Zobacz atrakcje"
        />
      </section>
      <GoogleMap />
      <Footer />
    </>
  );
}
