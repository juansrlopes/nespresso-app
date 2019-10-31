import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav";
import { About } from "./components/About";
import { MainCoffeeList } from "./components/MainCoffeeList";
import { CoffeeMachine } from "./components/CoffeeMachine";

const App = () => {
    return (
        <Router>
            <HeaderNav />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path={`/coffee/:coffeeSlug`}>
                    <CoffeeMachine />
                </Route>
                <Route path="/">
                    <MainCoffeeList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
