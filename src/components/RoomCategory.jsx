import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useInView } from "../hooks/useInView";
import { showElement } from "../utils/animate";
import { roomsData } from "../data/rooms";
import useDynamicRefs from "../hooks/useDynamicRefs";
import ImgModal from "../components/ImgModal";

export default function RoomCategory({ category }) {
  const getRooms = (roomCategory) =>
    roomsData.filter((room) => room.category === roomCategory);

  const [rooms, setRooms] = useState(getRooms(category));

  const getMainImages = () => {
    const images = [];
    rooms.forEach((room) => {
      import(`../assets/img/room-${room.imgId}-${room.id}.jpg`).then((src) =>
        images.push(src.default)
      );
    });
    return images;
  };

  const [mainImages, setMainImages] = useState(getMainImages);
  const [modalData, setModalData] = useState(null);
  const roomsRefs = useDynamicRefs(rooms);
  const intersection = useInView(roomsRefs, roomsRefs.length);

  console.log(modalData);
  useEffect(() => {
    rooms.forEach((room) => {
      if (intersection[room.id]) showElement(roomsRefs[room.id]);
    });
  }, [intersection]);

  return (
    <>
      {modalData ? (
        <ImgModal
          roomId={modalData.id}
          img={modalData.mainImg}
          closeModal={() => {
            document.body.style.overflow = "auto";
            setModalData(null);
          }}
        />
      ) : null}
      <section>
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
              setModalData({ id: room.id, mainImg: mainImages[i] });
            }}
          />
        ))}
      </section>
    </>
  );
}
