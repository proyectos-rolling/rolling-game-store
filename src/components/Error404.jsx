import React from "react";
import Image from "react-bootstrap/Image";

const Error404 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 flex-column pt-5">
      <div className="position-relative">
        <h1
          className="position-absolute"
          style={{
            fontSize: "5rem",
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
        >
          404
        </h1>
        <Image src="https://i.imgur.com/xKLUKg8.png" fluid />
      </div>
      <div className="inline-block align-middle border-top border-secondary mt-3 pt-3">
        <h2 className="font-weight-normal lead text-white text-center">
          Oops! Lo que buscas no está aquí. <i>Definitivamente</i> no está aquí.
        </h2>
      </div>
    </div>
  );
};

export default Error404;
