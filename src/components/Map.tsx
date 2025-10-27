import React, { useRef, useEffect, useState } from "react";

//@ts-ignore
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

//@ts-ignore
// import maplibreglWorker from "maplibre-gl/dist/maplibre-gl-csp-worker";
// //@ts-ignore
// maplibregl.workerClass = maplibreglWorker;

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
  const map = useRef<maplibregl.Map | null>(null);
  const [lng] = useState(MAP_CENTER_LNG);
  const [lat] = useState(MAP_CENTER_LAT);
  const [zoom] = useState(15);
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: `https://jsjohann.github.io/psychologische-beratung-olbrich/map/style.json`,
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

    const marker = new maplibregl.Marker({ color: "#e56c5c" })
      .setLngLat([MAP_CENTER_LNG, MAP_CENTER_LAT])
      .addTo(map.current);

    // Add click event to open in Google Maps
    marker.getElement().addEventListener("click", () => {
      const googleMapsUrl = `https://www.google.com/maps?q=${MAP_CENTER_LAT},${MAP_CENTER_LNG}`;
      window.open(googleMapsUrl, "_blank");
    });

    // Add cursor pointer style to indicate clickability
    marker.getElement().style.cursor = "pointer";
    marker
      .getElement()
      .setAttribute(
        "title",
        "Klicken Sie hier, um den Ort in Google Maps zu öffnen"
      );
  }, [isClient, lng, lat, zoom]);

  // Don't render anything on server side
  if (!isClient) {
    return (
      <div
        style={mapWraperStyle as React.CSSProperties}
        className="map-wrapper"
      >
        <div
          style={
            {
              ...mapContainerStyle,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f0f0",
              color: "#666",
            } as React.CSSProperties
          }
        >
          Karte wird geladen...
        </div>
      </div>
    );
  }

  return (
    <div style={mapWraperStyle as React.CSSProperties} className="map-wrapper">
      <div
        ref={mapContainer}
        style={mapContainerStyle as React.CSSProperties}
      />
    </div>
  );
}
