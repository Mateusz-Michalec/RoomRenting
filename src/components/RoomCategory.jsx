import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useInView } from "../hooks/useInView";
import { showElement } from "../utils/animate";
import { roomsData } from "../data/rooms";
import useDynamicRefs from "../hooks/useDynamicRefs";
import ImgModal from "../components/ImgModal";
import { images } from "../data/gallery";

export default function RoomCategory({ category }) {
  const getRooms = (roomCategory) =>
    roomsData.filter((room) => room.category === roomCategory);

  const [rooms, setRooms] = useState(getRooms(category));

  const getMainImages = () => {
    const images = [];
    rooms.forEach((room, i) => {
      import(`../assets/img/room-${room.imgId}-${i}.jpg`).then((src) =>
        images.push(src.default)
      );
    });
    return images;
  };

  const [mainImages, setMainImages] = useState(getMainImages);
  const [modalData, setModalData] = useState(null);
  const roomsRefs = useDynamicRefs(rooms);
  const intersection = useInView(roomsRefs, roomsRefs.length);

  useEffect(() => {
    rooms.forEach((room) => {
      if (intersection[room.id]) showElement(roomsRefs[room.id]);
    });
  }, [intersection]);

  return (
    <>
      {modalData ? (
        <ImgModal
          rooms={rooms}
          img={modalData.mainImg}
          imgId={modalData.imgId}
          closeModal={() => {
            document.body.style.overflow = "auto";
            setModalData(null);
          }}
        />
      ) : null}
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {rooms.map((room, i) => (
          <RoomCard
            key={room.id}
            ref={roomsRefs[i]}
            id={room.id}
            title={room.title}
            img={mainImages[i]}
            desc={room.desc}
            features={room.features}
            price={room.price}
            onClick={() => {
              document.body.style.overflow = "hidden";
              setModalData({ mainImg: mainImages[i], imgId: room.imgId });
            }}
          />
        ))}
      </section>
    </>
  );
}
