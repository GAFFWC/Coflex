import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import About from "./routes/About";
const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    );
};

export default App;
