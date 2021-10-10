import React, { useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

const PARIS = {
  lat: 48.8566,
  lng: 2.3522,
};

const Map = ({ flats, selectedFlat, setSelectedFlat }) => {
  console.log(flats);
  const mapRef = useRef(null);
  const MAPBOX_TOKEN = "pk.eyJ1IjoiYXNoaWdueWVvIiwiYSI6ImNrdWxlOXUyMzAzcHUycHBpNjYxd2JraDYifQ.9NfPtyCqXIKBMUCZm0Zjhg";

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: PARIS.lat,
    longitude: PARIS.lng,
    zoom: 11,
  });

  useEffect(() => {
    selectedFlat
      ? setViewport((prev) => {
          return {
            ...prev,
            latitude: selectedFlat.lat,
            longitude: selectedFlat.lng,
            zoom: 15,
          };
        })
      : setViewport((prev) => {
          return {
            ...prev,
            latitude: PARIS.lat,
            longitude: PARIS.lng,
            zoom: 11,
          };
        });
  }, [selectedFlat]);

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
          <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng} onClick={() => setSelectedFlat(flat)}>
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
