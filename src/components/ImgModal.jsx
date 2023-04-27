import React from "react";

export default function ImgModal({ img, alt, closeModal, roomId }) {
  return (
    <div
      className="position-fixed z-2 vw-100 vh-100 d-flex justify-content-center
    align-items-center
    "
      style={{ inset: "0" }}
    >
      <div className="dark-overlay" onClick={closeModal} />
      <div className="z-3 d-flex flex-column fade-in">
        <button
          type="button"
          className="mb-2 align-self-end"
          onClick={closeModal}
        >
          <i className="bi bi-x-lg text-white fs-2"></i>
        </button>
        <img
          src={img}
          alt={alt}
          className="w-100"
          style={{ maxHeight: "60vh", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
