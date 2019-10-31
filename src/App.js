import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav";
import { About } from "./components/About";
import { MainCoffeeList } from "./components/MainCoffeeList";

const App = () => {
    return (
        <Router>
            <div className="nespresso-app">
                <HeaderNav />
                <br />
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <MainCoffeeList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
