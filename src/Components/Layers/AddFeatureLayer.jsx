import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import config from "@arcgis/core/config";
import "../index.css";

export default function AddFeatureLayer() {
  config.apiKey =
    "AAPKd1b17caf87f8487294ad231e921f3b4eczRnXS6Ms1S86_zljbXg34zqZP0KY8ZNUg3_NWxWWVYTwXlbhbGRpw1A5GsgRZuU";
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "arcgis/topographic", // basemap styles service
      });
      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-118.80543, 34.027],
        zoom: 13,
      });
      //Add a point feature layer
      //Create a FeatureLayer and set the url property of the hosted feature layer in the ArcGIS REST Services.
      const trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
      });
      //Add trailheadsLayer (points) to the map.
      map.add(trailheadsLayer);

      //Add a line feature layer
      //Create a FeatureLayer and set the url property of the hosted feature layer in the ArcGIS REST Services.
      const trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
      });
      //Add trailsLayer with an index of 0. This ensures that the layer is added to the top of the array and is drawn before trailheadsLayer.
      map.add(trailsLayer, 0);

      //Add a polygon feature layer
      //Create a FeatureLayer and set the url property of the hosted feature layer in the ArcGIS REST Services.
      const parksLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
      });
      //Add parksLayer with an index of 0. This ensures that the layer is added to the top of the array and is drawn before trailsLayer.
      map.add(parksLayer, 0);
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}
