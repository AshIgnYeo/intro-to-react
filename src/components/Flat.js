import React from "react";
import "./Flat.css";

const Flat = ({ flat, selectedFlat, setSelectedFlat }) => {
  const isSelected = selectedFlat ? selectedFlat.id === flat.id : false;

  return (
    <div className={`flat ${isSelected ? "selected" : ""}`} key={flat.id} onClick={() => setSelectedFlat(flat)}>
      <div className="flat-image">
        <img src={flat.imageUrl} alt="" />
      </div>
      <div className="flat-name">{flat.name}</div>
    </div>
  );
};

export default Flat;
