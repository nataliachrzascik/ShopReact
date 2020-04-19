import React from 'react';
import Items from "../components/items/Items";
import dataShoes from "./products/shoes.json";
import pages from "./pages.css";

class Shoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        dataShoes.forEach(element => {
            this.state.data.push(element);
        });

    }
    render() {

        return (
            <>
                <div id="marginPage"></div>
                <h2>Buty</h2>
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
export default Shoes;