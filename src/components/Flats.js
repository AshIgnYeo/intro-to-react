import React from "react";
import "./Flats.css";

const Flats = ({ flats, setSelectedFlat }) => {
  return (
    <div className="flats-wrapper">
      {flats.length
        ? flats.map((flat) => {
            return (
              <div className="flat" key={flat.id} onClick={() => setSelectedFlat(flat)}>
                <div className="flat-image">
                  <img src={flat.imageUrl} alt="" />
                </div>
                <div className="flat-name">{flat.name}</div>
              </div>
            );
          })
        : "No results found"}
    </div>
  );
};

export default Flats;
