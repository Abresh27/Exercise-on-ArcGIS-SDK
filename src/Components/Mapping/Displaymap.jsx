import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import "../index.css";

export default function Displaymap() {
  //useRef for the container
  const mymapDiv = useRef(null);

  /**
   * Initialize application
   */
  //Render the map and the view
  useEffect(() => {
    if (mymapDiv.current) {
      //   console.log(mymapDiv.current);

      //create the map and the view
      const myMap = new Map({
        basemap: "osm",
      });
      const myView = new MapView({
        container: mymapDiv.current,
        map: myMap,
        center: [39.5, 8],
        zoom: 6,
      });
    }
  }, []);
  //Rendering the container
  return <div className="mapDiv" ref={mymapDiv}></div>;
}
