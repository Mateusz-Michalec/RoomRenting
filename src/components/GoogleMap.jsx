import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      className="d-block"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.7271415563728!2d22.58688171233558!3d49.30237813024057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473befa8bbd3f145%3A0x55092a149c21d62c!2sPolana%2059A%2C%2038-709%20Polana!5e1!3m2!1spl!2spl!4v1681197553332!5m2!1spl!2spl"
      style={{
        height: "60vh",
        width: "100vw",
      }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
