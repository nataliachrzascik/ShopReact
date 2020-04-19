import React from 'react';
import dataBags from "./products/bags.json";
import Items from "../components/items/Items";
import pages from "./pages.css";


class Bags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        dataBags.forEach(element => {
            this.state.data.push(element);
        });

    }
    render() {
        return (
            <>
                <div id="marginPage"></div>
                <h2>Torebki</h2>
                <div id="containerPage">
                    <div id="things">
                        {this.state.data.map((item) =>
                            <Items item={item} key={item.productID} />
                        )}
                    </div>

                </div >
            </>
        )
    }
}
export default Bags;