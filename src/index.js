// ** Import
//  * React
import React from "react";
import ReactDOM from "react-dom/client";
// * CSS
import "./index.css";
// * App.js
const App = React.lazy(() => import("./App"));

// * div#root Reference
const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId);

// ** Render
root.render(<App />);
