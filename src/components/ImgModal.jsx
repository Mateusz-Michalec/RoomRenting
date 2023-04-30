import React, { useState } from "react";

export default function ImgModal({ img, alt, closeModal, rooms, imgId }) {
  function getAllImages() {
    const images = [];
    if (rooms)
      for (let i = 0; i < rooms.length; i++) {
        import(`../assets/img/room-${imgId}-${i}.jpg`).then((src) =>
          images.push(src.default)
        );
      }
    return images;
  }

  const [images, setImages] = useState(getAllImages || null);
  const [currentImg, setCurrentImg] = useState(
    { img: img, index: imgId } || null
  );

  function nextImage() {
    const currentIndex = currentImg.index;
    if (currentIndex < 2) {
      const newIndex = currentIndex + 1;
      setCurrentImg({ img: images[newIndex], index: newIndex });
    } else {
      const newIndex = 0;
      setCurrentImg({ img: images[newIndex], index: newIndex });
    }
  }

  function previousImage() {
    const currentIndex = currentImg.index;
    if (currentIndex === 0) {
      const newIndex = 2;
      setCurrentImg({ img: images[newIndex], index: newIndex });
    } else {
      const newIndex = currentIndex - 1;
      setCurrentImg({ img: images[newIndex], index: newIndex });
    }
  }

  return (
    <div
      className="position-fixed z-2 vw-100 vh-100 d-flex justify-content-center
    align-items-center
    "
      style={{ inset: "0", top: "31.5px" }}
    >
      <div className="dark-overlay" onClick={closeModal} />
      <div className="z-3 d-flex flex-column fade-in">
        <button type="button" className="mb-2 mx-auto" onClick={closeModal}>
          <i className="bi bi-x-lg text-white fs-2"></i>
        </button>
        <img
          src={currentImg.img}
          alt={alt}
          className="w-100"
          style={{ maxHeight: "60vh", objectFit: "cover" }}
        />
        {rooms ? (
          <div className="d-flex justify-content-evenly mt-2">
            <button type="button" onClick={() => previousImage()}>
              <i className="bi bi-chevron-compact-left text-white fs-1"></i>
            </button>
            <button type="button" onClick={() => nextImage()}>
              <i className="bi bi-chevron-compact-right text-white fs-1"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
