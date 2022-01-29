import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./map.css";
import useSwr from "swr";
// import { useState } from "react";
// import HeatmapLayer from "react-leaflet-heatmap-layer";
const fetcher = (...args) => fetch(...args).then((response) => response.json());
function MyComponent() {
  return null;
}

export default function Leafletmap() {
  const map = this.useMap();
  const [locations, setLocation] = useState([]);
  map.on("moveend", function () {
    var bounds = map.getBounds();
    var southwest = bounds.getSouthWest();
    var northeast = bounds.getNorthEast();
    var northwest = bounds.getNorthWest();
    var southeast = bounds.getSouthEast();
    locations = [];
    var is = northwest.lng;
    var ie = northeast.lng;
    // console.log(northwest, northeast, southeast, southwest);
    if (northwest.lng > northeast.lng) {
      is = northeast.lng;
      ie = northwest.lng;
    }

    var js = northwest.lat;
    var je = southwest.lat;
    if (northwest.lat > southwest.lat) {
      js = southwest.lat;
      je = northwest.lat;
    }
    for (let i = is; i <= ie; i += 0.01) {
      for (let j = js; j <= je; j += 0.01) {
        locations.push({
          latitude: i,
          longitude: j,
        });
      }
    }
    // console.log(markers);
    // return markers;
  });
  return (
    <div>
      <MapContainer
        onMoveEnd={() => {
          console.log("test");
        }}
        center={[45, 42, -75.69]}
        zoom={12}
      >
        <MyComponent />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.lat}
            position={[location.lat, location.lng]}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
}
