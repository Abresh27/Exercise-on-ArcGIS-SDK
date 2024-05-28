import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import "../index.css";

export default function AddVectorTileLayer() {
  config.apiKey =
    "AAPKd1b17caf87f8487294ad231e921f3b4eczRnXS6Ms1S86_zljbXg34zqZP0KY8ZNUg3_NWxWWVYTwXlbhbGRpw1A5GsgRZuU";
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      //Create a VectorTileLayer. Set the the url property to reference the vector tile layer.
      const vtlLayer = new VectorTileLayer({
        url: "https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer/",
      });

      //Set the layers to the vtlLayer element.
      const map = new Map({
        basemap: "arcgis/light-gray",
        layers: vtlLayer,
      });
      const view = new MapView({
        map: map,
        container: mapDiv.current,
        zoom: 13,
        center: [-118.80543, 34.027],
      });
    }
  }, []);
  return <div className="mapDiv" ref={mapDiv}></div>;
}
