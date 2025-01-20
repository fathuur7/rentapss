import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Maps = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13); // Latitude, Longitude, Zoom Level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Adding a marker with a popup showing the address
    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('<b>123 Business Street, Downtown<br/>New York, NY 10001</b>').openPopup();
  }, []);

  return <div id="map" style={{ height: '540px', width: '100%' }} className='overflow-hidden'></div>;
};

export default Maps;
