import React from "react";
import { HeaderNav } from "./components/HeaderNav";
import { MainCoffeeList } from "./components/MainCoffeeList";

const App = () => {
    return (
        <div className="nespresso-app">
            <HeaderNav />
            <br />
            <MainCoffeeList />
        </div>
    );
};

export default App;
