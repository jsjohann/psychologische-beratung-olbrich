import React, { useRef, useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

//@ts-ignore
import maplibregl from "!maplibre-gl";
//@ts-ignore
import maplibreglWorker from "maplibre-gl/dist/maplibre-gl-csp-worker";
//@ts-ignore
maplibregl.workerClass = maplibreglWorker;

const mapWraperStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const mapContainerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

const MAP_CENTER_LNG = 13.724777012112785;
const MAP_CENTER_LAT = 51.046627950628135;

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef(null);
  const [lng] = useState(MAP_CENTER_LNG);
  const [lat] = useState(MAP_CENTER_LAT);
  const [zoom] = useState(15);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `http://localhost:8000/map/style.json`,
      center: [lng, lat],
      zoom: zoom,
      minZoom: 11,
      maxZoom: 18,
      maxBounds: [
        [13, 50.8],
        [14.4, 51.2],
      ],
    });

    (map.current as any)?.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    new maplibregl.Marker({ color: "#e56c5c" })
      .setLngLat([MAP_CENTER_LNG, MAP_CENTER_LAT])
      .addTo(map.current);
  });

  return (
    <div style={mapWraperStyle as React.CSSProperties} className="map-wrapper">
      <div
        ref={mapContainer}
        style={mapContainerStyle as React.CSSProperties}
      />
    </div>
  );
}
