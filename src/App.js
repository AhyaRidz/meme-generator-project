// ** Import
// * React
import React from "react";
// * Custom Components
const Topnav = React.lazy(() => import("./component/Topnav"));
const Meme = React.lazy(() => import("./component/Meme"));

export default function App() {
    return (
        <div>
            <Topnav />
            <main>
                <Meme />
            </main>
        </div>
    );
}
