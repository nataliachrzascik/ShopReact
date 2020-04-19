import React from "react";
import { Component } from "react";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import app from "./App.css";
import Main from "./mainPage/Main";
import Bags from "../pages/Bags";
import Glasses from "../pages/Glasses";
import Jackets from "../pages/Jackets";
import Shoes from "../pages/Shoes";
import Watches from "../pages/Watches";
import ShoppingBag from "../components/shoppingBag/ShoppingBag";
import Item from "../components/items/item/Item";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        window.MyVar = [];
    }
    render() {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div id="container">
                    <div id="containerName">
                        <div id="menuTag">
                            <NavLink to="/index.html">
                                <h1>BUBLEGUM SHOP</h1>
                            </NavLink>
                        </div>
                        <div id="menuRightTags">
                            <NavLink to="/shoppingBag" exact><i className="fas fa-shopping-bag"></i></NavLink>
                        </div>
                    </div>
                    <div id="containerMenu">
                        <NavLink
                            to="/bags"
                            exact
                        ><div className="menuCategory">TOREBKI</div></NavLink>
                        <NavLink
                            to="/glasses"
                        ><div className="menuCategory">OKULARY</div></NavLink>
                        <NavLink
                            to="/jackets"
                            exact
                        ><div className="menuCategory">KURTKI</div></NavLink>
                        <NavLink
                            to="/shoes"
                            exact
                        ><div className="menuCategory">BUTY</div></NavLink>
                        <NavLink
                            to="/watches"
                            exact
                        ><div className="menuCategory">ZEGARKI</div></NavLink>
                    </div>
                </div>

                <section>

                    <Switch>
                        <Route path="/index.html" component={Main}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/" exact component={Main}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/bags" component={Bags}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/glasses" component={Glasses}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/jackets" component={Jackets}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/shoes" component={Shoes}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/watches" component={Watches}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/shoppingBag" component={ShoppingBag}></Route>
                    </Switch>
                    <Switch>
                        <Route path="/item" component={Item}></Route>
                    </Switch>
                </section>
                <div id="advert"></div>
                <footer>
                    <div className="foot">Zakupy online</div>
                    <div className="foot">Dostawa i zwroty</div>
                    <div className="foot">Kontakt</div>
                </footer>

            </HashRouter >
        )
    }
}
export default App;