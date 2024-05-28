import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import config from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import "../index.css";

export default function AddPointLinePolygon() {
  config.apiKey =
    "AAPKd1b17caf87f8487294ad231e921f3b4eczRnXS6Ms1S86_zljbXg34zqZP0KY8ZNUg3_NWxWWVYTwXlbhbGRpw1A5GsgRZuU";
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "arcgis/topographic",
      });
      const View = new MapView({
        map: map,
        center: [-118.805, 34.027], //Longitude, latitude
        zoom: 13,
        container: mapDiv.current,
      });

      //Create and add a GraphicsLayer to store graphics.
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      //*** Create a Point Geometry ***/
      //Create a point and simpleMarkerSymbol that will be used to create a Graphic
      //Create a point and set the geometry
      const point = {
        //Create a point
        type: "point",
        longitude: -118.80657463861,
        latitude: 34.0005930608889,
      };
      //Set the symbol properties
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 1,
        },
      };
      //Create a Graphic and set the geometry and symbol properties
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      });
      graphicsLayer.add(pointGraphic);

      //*** Create a Line Geometry ***//
      //Create a line and set the geometry
      const polyline = {
        type: "polyline",
        paths: [
          [-118.821527826096, 34.0139576938577], //Longitude, latitude
          [-118.814893761649, 34.0080602407843], //Longitude, latitude
          [-118.808878330345, 34.0016642996246], //Longitude, latitude
        ],
      };
      //Set the symbol properties
      const simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40], // Orange
        width: 2,
      };
      //Create a Graphic and set the geometry and symbol properties
      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol,
      });
      graphicsLayer.add(polylineGraphic);

      //*** Create a Polygon Geometry ***//
      //Create a Polygon and set the geometry
      const polygon = {
        type: "polygon",
        rings: [
          [-118.818984489994, 34.0137559967283], //Longitude, latitude
          [-118.806796597377, 34.0215816298725], //Longitude, latitude
          [-118.791432890735, 34.0163883241613], //Longitude, latitude
          [-118.79596686535, 34.008564864635], //Longitude, latitude
          [-118.808558110679, 34.0035027131376], //Longitude, latitude
        ],
      };
      //Set the symbol properties
      const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8], // Orange, opacity 80%
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };
      //Create a pop-up when the polygon is clicked
      const popupTemplate = {
        title: "{Name}",
        content: "{Description}",
      };
      const attributes = {
        Name: "Graphic",
        Description: "I am a polygon",
      };
      //Create a Graphic and set the geometry and symbol properties
      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol,
        //Update the polygonGraphic to include the popupTemplate and attribute properties
        attributes: attributes,
        popupTemplate: popupTemplate,
      });
      graphicsLayer.add(polygonGraphic);
    }
  }, []);
  return <div className="mapDiv" ref={mapDiv}></div>;
}
