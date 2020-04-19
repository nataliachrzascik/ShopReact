import React from 'react';
import Sliders from "../../components/slider/Sliders";
import { NavLink } from "react-router-dom";
import main from "./Main.css";



class Main extends React.Component {

    render() {

        return (
            <>
                <div id="sliderBackground">
                    <Sliders />
                </div>

                <div id="newsletter">
                    <div id="newsletterEmail">
                        <form>
                            <div id="newsletterText">CHCE DOSTAWAĆ NEWSLETTER </div>
                            <input id="emailNews" type="email" placeholder="WPISZ SWÓJ EMAIL" />
                            <button id="emailButton">Zapisz mnie</button>
                        </form>
                    </div>
                    <div id="newsletterAd">
                        <div className="Ad">DARMOWA DOSTAWA OD 150ZŁ</div>
                        <div className="Ad">90 DNI NA ZWROT</div>
                    </div>
                </div>
                <h2>Nowa kolekcja</h2>
                <div id="collection">
                    <div id="col1" className="col">
                        <div className="colPrice">
                            <div className="colThing">okulary</div>
                            <div className="colPriceText">49,99</div>
                        </div>
                    </div>
                    <div id="col2" className="col">
                        <div className="colPrice">
                            <div className="colThing">kurtka</div>
                            <div className="colPriceText">129,99</div>
                        </div>
                    </div>
                    <div id="col3" className="col">
                        <div className="colPrice">
                            <div className="colThing">buty</div>
                            <div className="colPriceText">89,99</div>
                        </div>
                    </div>
                    <div id="col4" className="col">
                        <div className="colPrice">
                            <div className="colThing">zegarek</div>
                            <div className="colPriceText">199,99</div>
                        </div>
                    </div>
                </div>
                <h2>Co jest na topie</h2>
                <div id="collection">
                    <NavLink to="/bags" exact>
                        <div id="top1" className="col top">
                            <div className="topText">bestsellery</div>
                            <div className="topCheck">SPRAWDŹ</div>
                        </div></NavLink>
                    <NavLink to="/glasses" exact>
                        <div id="top2" className="col top">
                            <div className="topText">okazje</div>
                            <div className="topCheck">SPRAWDŹ</div>
                        </div></NavLink>
                    <NavLink to="/shoes" exact>
                        <div id="top3" className="col top">
                            <div className="topText">buty</div>
                            <div className="topCheck">SPRAWDŹ</div>
                        </div></NavLink>
                </div>
                <div id="face">
                    <div className="icon"><i className="fab fa-facebook-square"></i><br />FACEBOOK</div>
                    <div className="icon"><i className="fab fa-instagram"></i><br />INSTAGRAM</div>
                </div>
            </>
        );
    }

};
export default Main
