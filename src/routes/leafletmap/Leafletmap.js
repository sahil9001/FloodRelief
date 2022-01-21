import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import useSwr from "swr";
// import HeatmapLayer from "react-leaflet-heatmap-layer";
const fetcher = (...args) => fetch(...args).then((response) => response.json());
export default function Leafletmap() {
  const url =
    "https://api.open-elevation.com/api/v1/lookup?locations=10,10|20,20|41.161758,-8.583933";
  const { data, error } = useSwr(url, { fetcher });

  const elevation = data && !error ? data : [];
  console.log(elevation);
  const addressPoints = [
    {
      lat: 41.161758,
      lng: -8.583933,
      count: 10,
    },
  ];
  return (
    <div>
      <MapContainer center={[45, 42, -75.69]} zoom={12}>
        {/* <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={addressPoints}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          intensityExtractor={(m) => parseFloat(m[2])}
        /> */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
