import React from 'react';
import Items from "../components/items/Items";
import dataGlasses from "./products/glasses.json";
import pages from "./pages.css";

class Glasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        dataGlasses.forEach(element => {
            this.state.data.push(element);
        });

    }
    render() {
        return (
            <>
                <div id="marginPage"></div>
                <h2>Okulary</h2>
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
export default Glasses;