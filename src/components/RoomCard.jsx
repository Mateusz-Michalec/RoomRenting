import React, { forwardRef } from "react";

const RoomCard = forwardRef(
  ({ id, title, img, desc, features, onClick, price }, ref) => (
    <div
      ref={ref}
      className="card mt-4 hidden-x-right"
      id={id}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className="card-header bg-dark text-white text-center">{title}</h6>
      <img src={img} alt={title} loading="lazy" />

      {desc ? (
        <div className="card-body d-flex flex-column align-items-center">
          <p className="card-text">{desc}</p>
          <ul>
            {features.split(",").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="text-center">
            <button type="button" className="btn-outline-reversed rounded mt-2">
              <i className="bi bi-telephone"></i> Rezerwacja{" "}
              <p className="text-green m-0">{price} zł za dobę</p>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
);

export default RoomCard;
