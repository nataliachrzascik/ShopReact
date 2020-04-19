import React from 'react';
import { Link } from "react-router-dom";
import shoppingBag from "./ShoppingBag.css";

class ShoppingBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: window.MyVar
        };
    }

    render() {
        return (
            <>
                {<div id="bagContainer">
                    < div>{this.state.items.length !== 0 ?
                        this.state.items.map((item, key) => (
                            <div className="thing" key={item.productID} id={item.productID} style={{ backgroundImage: item.img }}>
                                <div className="cross" onClick={() => {
                                    this.state.items.splice(this.state.items.indexOf(item), 1)
                                    return (
                                        this.setState({
                                            items: this.state.items
                                        }),
                                        window.MyVar = this.state.items
                                    )

                                }}>X</div>
                                <Link to={{
                                    pathname: `/item/${item.productID}`,
                                    aboutProps: {
                                        item: item
                                    }

                                }}>
                                    <div className="border">
                                        <div className="price">{item.price}</div>
                                        <div className="thingName">{item.shortDescryption}</div>
                                    </div></Link>
                            </div>
                        ))
                        :
                        (
                            <div id="nothing"><h2>Nie masz nic w koszyku. Wybierz coś</h2></div>
                        )

                    }
                    </div>
                </div>
                }
            </>
        )
    }
}
export default ShoppingBag;