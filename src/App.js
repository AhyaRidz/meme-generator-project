// ** Import
// * React
import React from "react";
// * Topnav.js
const Topnav = React.lazy(() => import("./component/Topnav"));

export default function App() {
    return <Topnav />;
}
