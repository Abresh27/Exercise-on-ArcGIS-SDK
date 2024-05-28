import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import DisplayWebMap from "./Components/Mapping/DisplayWebMap";
import Displaymap from "./Components/Mapping/Displaymap";
import AddPointLinePolygon from "./Components/Mapping/AddPointLinePolygon";
import AddFeatureLayer from "./Components/Layers/AddFeatureLayer";
import AddVectorTileLayer from "./Components/Layers/AddVectorTileLayer";
import "./App.css";

function Home() {
  return (
    <div>
      <div>
        <h1>Exercise on ArcGIS API for JS in React</h1>
        <center>
          <h1>Mapping(2D)</h1>
        </center>
        <ul>
          <h3>Create and display a map with a basemap layer</h3>
          <li>
            <Link to="/display-map">Display a map</Link>
          </li>
          <h3>Display a map from a web map stored in ArcGIS online</h3>
          <li>
            <Link to="/display-web-map">Display a web-map map</Link>
          </li>
          <h3>
            Add and display points, lines, and polygons on a map as graphics.
          </h3>
          <li>
            <Link to="/display-point-line-polygon-map">
              Add and display point, line, polygon on a map
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <center>
          <h1>Layers</h1>
        </center>
        <ul>
          <h3>
            Access and display point, line, and polygon features in hosted
            feature layers using URLs. <br />
            Note: To learn how to publish your own data as a hosted feature
            layer, visit Data hosting services in the Mapping API and location
            services guide.
          </h3>
          <li>
            <Link to="/add-feature-layer">
              Access and display features from hosted feature layer
            </Link>
          </li>
          <h3>
            Add a published vector tile layer to an existing map. <br />
            Note: To learn how to publish your own vector tile layer, visit Data
            hosting in the Mapping API and location services guide.
          </h3>
          <li>
            <Link to="/add-vector-tileLayer">
              Add a published vector tile layer to an existing map.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-map" element={<Displaymap />} />
        <Route path="/display-web-map" element={<DisplayWebMap />} />
        <Route
          path="/display-point-line-polygon-map"
          element={<AddPointLinePolygon />}
        />
        <Route path="/add-feature-layer" element={<AddFeatureLayer />} />
        <Route path="/add-vector-tileLayer" element={<AddVectorTileLayer />} />
      </Routes>
    </>
  );
}

export default App;
