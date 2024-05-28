import React, { useEffect, useRef } from "react";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import "../index.css";

export default function DisplayWebMap() {
  //useRef for the container
  const mapDiv = useRef(null);
  /**
   * Initialize application
   */
  //Render the map (web map) and the view
  useEffect(() => {
    if (mapDiv.current) {
      //create the map and the view
      const webmap = new WebMap({
        //Import the web-map from the ArcGIS online using the item id
        portalItem: {
          id: "87aa1c44bff94780a0814036f034142c",
        },
      });
      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        zoom: 12,
        center: [38.7567272, 8.9956587], //[Longitude, Latitude]
      });
      //Add the bookmark
      const bookmarks = new Bookmarks({
        view,
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks, //uses its bookmark created in the ArcGIS online
        expanded: true,
      });

      // Add the widget to the top-right corner of the view
      view.ui.add(bkExpand, "top-right");

      // bonus - how many bookmarks in the webmap?
      view.when(() => {
        if (webmap.bookmarks && webmap.bookmarks.length) {
          console.log("Bookmarks: ", webmap.bookmarks.length);
        } else {
          console.log("No bookmarks in this webmap.");
        }
      });
    }
  }, [mapDiv]);
  //Rendering the container
  return <div className="mapDiv" ref={mapDiv}></div>;
}
