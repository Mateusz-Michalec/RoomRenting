import React, { forwardRef, useState } from "react";

const RoomCard = forwardRef(
  ({ id, title, img, desc, features, onClick, price }, ref) => {
    const [phone, setPhone] = useState("Rezerwacja");

    return (
      <div className="col hidden-x-right" ref={ref} id={id}>
        <div className="card h-100">
          <h6 className="card-header bg-dark text-white text-center">
            {title}
          </h6>
          <img
            src={img}
            alt={title}
            className="w-100"
            loading="lazy"
            onClick={onClick}
            style={{ cursor: "pointer" }}
          />

          {desc ? (
            <div className="card-body d-flex flex-column align-items-center p-4">
              <p className="card-text">{desc}</p>
              <ul className="mb-4">
                {features.split(",").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="text-center mt-auto d-xxl-flex justify-content-xl-around align-items-xxl-baseline w-100">
                <button
                  type="button"
                  className="btn-outline-reversed rounded"
                  onClick={() => setPhone("550 234 214")}
                >
                  <i className="bi bi-telephone"></i> {phone}
                </button>
                <p className="text-green">{price} zł za dobę</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export default RoomCard;
