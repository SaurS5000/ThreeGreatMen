import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer';

const MapContainer = ({ currentLocation }) => {
  // Custom hook to set the map view to the current location
  function SetViewToCurrentLocation() {
    const map = useMapEvents({
      zoomend() {
        map.setView(currentLocation, map.getZoom());
      },
    });
    return null;
  }

  // Sample heatmap data (latitude, longitude) - replace with your own data
  const heatmapData = [
    [currentLocation.lat, currentLocation.lng], // Current location
    [currentLocation.lat + 0.01, currentLocation.lng + 0.01], // Sample point 1
    [currentLocation.lat + 0.02, currentLocation.lng - 0.01], // Sample point 2
    [currentLocation.lat - 0.01, currentLocation.lng + 0.02], // Sample point 3
    [currentLocation.lat - 0.02, currentLocation.lng - 0.02], // Sample point 4
  ];

  return (
    <MapContainer center={currentLocation} zoom={13} style={{ height: '400px', width: '100%' }}>
      <SetViewToCurrentLocation />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        points={heatmapData}
        latitudeExtractor={(point) => point[0]}
        longitudeExtractor={(point) => point[1]}
        intensityExtractor={() => 1}
      />
    </MapContainer>
  );
};

export default MapContainer;
