import React from "react";
import "./RoomCards.scss";
import room1 from "../../assets/img/room-1.jpg";
import room2 from "../../assets/img/room-2.jpg";
import room3 from "../../assets/img/room-3.jpg";

const RoomCards = React.forwardRef((props, ref) => (
  <section ref={ref} id="roomCards">
    <div className="room-card position-relative mt-4 ">
      <h5 className="w-100 text-center">Pokoje dwuosobowe</h5>
      <img src={room1} alt="Pokoje dwuosobowe" />
    </div>
    <div className="room-card position-relative mt-4 ">
      <h5 className="w-100 text-center">Pokoje 3-4 osobowe</h5>
      <img src={room2} alt="Pokoje 3-4 osobowe" />
    </div>
    <div className="room-card position-relative mt-4 ">
      <h5 className="w-100 text-center">Pokoje Premium</h5>
      <img src={room3} alt="Pokoje Premium" />
    </div>
  </section>
));

export default RoomCards;
