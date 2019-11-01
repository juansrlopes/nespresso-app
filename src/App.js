import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav";
import { About } from "./components/About";
import { MainCoffeeList } from "./components/MainCoffeeList";
import { CoffeeMachine } from "./components/CoffeeMachine";
import "./App.scss";

const App = () => {
    return (
        <Router>
            <HeaderNav />
            <Switch>
                <Route path="/about" children={<About />} />
                <Route
                    path={`/coffee/:coffeeSlug`}
                    children={<CoffeeMachine />}
                />
                <Route path="/" children={<MainCoffeeList />} />
            </Switch>
        </Router>
    );
};

export default App;
