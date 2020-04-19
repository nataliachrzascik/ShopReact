import React from 'react';
import Items from "../components/items/Items";
import dataJackets from "./products/jackets.json";
import pages from "./pages.css";

class Jackets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        dataJackets.forEach(element => {
            this.state.data.push(element);
        });

    }
    render() {
        return (
            <>
                <div id="marginPage"></div>
                <h2>Kurtki</h2>
                <div id="containerPage">
                    <div id="things">
                        {this.state.data.map((item, key) =>
                            <Items item={item} key={item.productID} />
                        )}
                    </div>

                </div >
            </>
        )
    }
}
export default Jackets;