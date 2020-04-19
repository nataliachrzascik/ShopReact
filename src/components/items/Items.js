import React from 'react';
import { Link } from "react-router-dom";
import items from "./Items.css";

const Items = (props) => {

    return (
        <>
            {
                <div className="thing" key={props.key} id={props.item.productID} style={{ backgroundImage: props.item.img }}>
                    <Link to={{
                        pathname: `/item/${props.item.productID}`,
                        aboutProps: {
                            item: props.item
                        }

                    }}><div className="border">
                            <div className="price">{props.item.price}</div>
                            <div className="thingName">{props.item.shortDescryption}</div>
                        </div></Link>
                    <div className="bagAdd" onClick={() => window.MyVar = [...window.MyVar, props.item]}>
                        <i className="fas fa-shopping-bag fa-shopping-bag-product"></i></div>
                </div>
            }
        </>
    )
}
export default Items;