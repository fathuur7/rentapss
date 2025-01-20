import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export const Maps = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([51.505, -0.09], 13); // Latitude, Longitude, Zoom Level    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
      
      // Adding a marker with a popup showing the address
      const marker = L.marker([51.505, -0.09]).addTo(mapRef.current);
      marker.bindPopup('<b>123 Business Street, Downtown<br/>New York, NY 10001</b>').openPopup();
    }
  }, []);

  return <div id="map" style={{ height: '540px', width: '100%' }} className='overflow-hidden'></div>;
};

export default Maps;

