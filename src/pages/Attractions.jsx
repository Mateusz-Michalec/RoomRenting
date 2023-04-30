import React, { useEffect, useRef } from "react";
import heroImg from "../assets/img/attractions-hero.jpg";
import natureSrc from "../assets/img/nature.jpg";
import houseSrc from "../assets/img/house.jpg";
import IconText from "../components/IconText";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";
import { showElement, showGroupElements } from "../utils/animate";
import { Link } from "react-router-dom";

export default function Attractions() {
  const introText = useRef();
  const natureImg = useRef();
  const natureAttractions = useRef();
  const houseImg = useRef();
  const houseAttractions = useRef();

  const intersection = useInView(
    [introText, natureImg, natureAttractions, houseImg, houseAttractions],
    5
  );

  useEffect(() => {
    if (intersection.introText) showElement(introText);
    if (intersection.natureImg) showElement(natureImg);
    if (intersection.natureAttractions)
      showGroupElements(natureAttractions, "div");
    if (intersection.houseImg) showElement(houseImg);
    if (intersection.houseAttractions)
      showGroupElements(houseAttractions, "div");
  }, [intersection]);

  return (
    <>
      <section
        style={{ clipPath: "inset(0)" }}
        className="position-relative vh-100 vw-100"
      >
        <div className="light-overlay"></div>
        <img src={heroImg} className="img-hero img-zoom" alt="Rzeka" />
        <header className="hero-body fade-in-hero">
          <h1 className="header">Atrakcje Górskiej Doliny</h1>
          <p>Jedno miejsce, wiele możliwości</p>
          <button type="button" className="btn-outline-gd">
            <Link to="/galeria">Galeria zdjęć</Link>
          </button>
          <i className="bi bi-chevron-compact-down arrow-down mt-5 d-block"></i>
        </header>
      </section>
      <section>
        <header className="p-5 hidden-opacity" ref={introText} id="introText">
          <h2 className="mb-4">Atrakcje</h2>
          <p>
            Nasza oferta zawiera szereg atrakcji. Każdy znajdzie coś dla siebie.
          </p>
        </header>
        <section
          className="position-relative col-12 hidden-opacity"
          ref={natureImg}
          id="natureImg"
        >
          <h6 className="bg-dark text-white text-center py-2 position-absolute w-100">
            Kontakt z naturą
          </h6>
          <img
            src={natureSrc}
            alt="Łąka przy zachodzie słońca"
            className="w-100"
            style={{ objectFit: "cover", height: "20rem" }}
          />
        </section>
        <div
          className="py-5 row gap-5 bg-white-1 animation-delays"
          ref={natureAttractions}
          id="natureAttractions"
        >
          <IconText icon="tree" text="Pomniki przyrody" />
          <IconText icon="signpost-split" text="Szlaki turystyczne" />
          <IconText icon="bicycle" text="Trasy rowerowe" />
          <IconText icon="binoculars" text="Widoki" />
          <IconText icon="lungs" text="Świeże powietrze" />
        </div>
        <section
          className="position-relative col-12 hidden-opacity"
          ref={houseImg}
          id="houseImg"
        >
          <h6 className="bg-dark text-white text-center py-2 position-absolute w-100">
            Atrakcje w strefie zamieszkania
          </h6>
          <img
            src={houseSrc}
            alt="Dom w górach"
            className="w-100"
            style={{ objectFit: "cover", height: "20rem" }}
          />
        </section>
        <div
          className="py-5 row gap-5 bg-white-1 animation-delays"
          ref={houseAttractions}
          id="houseAttractions"
        >
          <IconText icon="basket2" text="Lokalne wyroby" />
          <IconText icon="fire" text="Ogniska" />
          <IconText icon="dice-5" text="Gry w plenerze" />
          <IconText icon="book" text="Biblioteczka" />
          <IconText icon="balloon" text="Zabawki dla dzieci" />
        </div>
      </section>
      <Footer />
    </>
  );
}
