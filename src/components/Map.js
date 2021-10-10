import React from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

const Map = ({ flats }) => {
  console.log(flats);
  const mapRef = useRef(null);
  const MAPBOX_TOKEN = "pk.eyJ1IjoiYXNoaWdueWVvIiwiYSI6ImNrdWxlOXUyMzAzcHUycHBpNjYxd2JraDYifQ.9NfPtyCqXIKBMUCZm0Zjhg";
  const PARIS = {
    lat: 48.8566,
    lng: 2.3522,
  };
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: PARIS.lat,
    longitude: PARIS.lng,
    zoom: 11,
  });
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleSelectMarker = (marker) => {
    setSelectedFlat(marker);
    setViewport((prev) => {
      return {
        ...prev,
        latitude: marker.lat,
        longitude: marker.lng,
        zoom: 13,
      };
    });
  };

  const handleResetMap = () => {
    setSelectedFlat(null);
    setViewport((prev) => {
      return {
        ...prev,
        latitude: PARIS.lat,
        longitude: PARIS.lng,
        zoom: 11,
      };
    });
  };
  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v10"
      onViewportChange={(viewport) => setViewport(viewport)}
      ref={mapRef}>
      {flats.map((flat) => {
        return (
          <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng} onClick={() => handleSelectMarker(flat)}>
            <FaMapMarkerAlt color="tomato" size="1.5rem" />
          </Marker>
        );
      })}

      {selectedFlat && (
        <Popup latitude={selectedFlat.lat} longitude={selectedFlat.lng} closeOnClick={true} onClose={handleResetMap}>
          <h3>{selectedFlat.name}</h3>
        </Popup>
      )}
    </ReactMapGl>
  );
};

export default Map;
