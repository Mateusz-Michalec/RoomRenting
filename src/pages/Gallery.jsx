import React, { useEffect, useState } from "react";
import { images } from "../data/gallery";
import ImgModal from "../components/ImgModal";
import useDynamicRefs from "../hooks/useDynamicRefs";
import { useInView } from "../hooks/useInView";
import { showElement } from "../utils/animate";
import Footer from "../components/Footer";

export default function Gallery() {
  const imagesRefs = useDynamicRefs(images);
  const intersection = useInView(imagesRefs, imagesRefs.length);
  const [modalImg, setModalImg] = useState(null);

  console.log(intersection);

  function renderGallery() {
    const galleryElements = [];
    images.map((image, i) =>
      galleryElements.push(
        <img
          id={image.id}
          ref={imagesRefs[i]}
          key={image.id}
          className="col hidden-x-right"
          style={{ objectFit: "cover", height: "20rem", cursor: "pointer" }}
          src={image.img}
          alt={image.imgAlt}
          loading="lazy"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setModalImg({ img: image.img, alt: image.imgAlt });
          }}
        />
      )
    );
    return galleryElements;
  }

  useEffect(() => {
    images.forEach((image) => {
      if (intersection[image.id]) showElement(imagesRefs[image.id]);
    });
  }, [intersection]);

  return (
    <>
      {modalImg ? (
        <ImgModal
          img={modalImg.img}
          alt={modalImg.alt}
          closeModal={() => {
            document.body.style.overflow = "auto";
            setModalImg(null);
          }}
        />
      ) : null}
      <section className="p-5 mt-5 container-fluid">
        <header className="mb-5 fade-in">
          <h2 className="mb-3">Galeria zdjęć</h2>
          <p>Poznaj Górską Dolinę oraz jej okolice.</p>
        </header>
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {renderGallery()}
        </section>
      </section>
      <Footer />
    </>
  );
}
