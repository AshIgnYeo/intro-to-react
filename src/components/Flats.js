import React from "react";
import "./Flats.css";

const Flats = ({ flats, setSelectedFlat, selectedFlat }) => {
  return (
    <div className="flats-wrapper">
      {flats.length
        ? flats.map((flat) => {
            const isSelected = selectedFlat ? selectedFlat.id === flat.id : false;
            return (
              <div
                className={`flat ${isSelected ? "selected" : ""}`}
                key={flat.id}
                onClick={() => setSelectedFlat(flat)}>
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
