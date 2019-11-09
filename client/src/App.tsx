import React from "react";
import Home from "./Components/Home";
import flags from "./Flags";

const App: React.FC = () => {
    return (
        <div className="App">
            <Home/>

            { flags }
        </div>
    );
}

export default App;
