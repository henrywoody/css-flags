import React from "react";
import { Home } from "./Components";
import { flags } from "./Flags";

export function App() {
    return (
        <div className="App">
            <Home />

            {flags}
        </div>
    );
}
