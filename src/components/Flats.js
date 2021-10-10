import React from "react";
import "./Flats.css";

const Flats = ({ flats }) => {
  return (
    <div className="flats-wrapper">
      {/* <div className="flats"> */}
      {flats.map((flat) => {
        return (
          <div className="flat" key={flat.id}>
            <div className="flat-image">
              <img src={flat.imageUrl} alt="" />
            </div>
            <div className="flat-name">{flat.name}</div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Flats;
