import React from 'react';
import item from "./Item.css";

const Item = (props) => {
    const item = props.location.aboutProps.item;
    return (
        <>
            <div id="productContainer">
                <div id="productImg" style={{ backgroundImage: item.img }}></div>
                <div id="productText">
                    <div id="productTitle"><h2>{item.shortDescryption}</h2></div>
                    <div id="productAbout">{item.descryption}</div>
                    <div id="productPrice">Cena: {item.price}</div>
                </div>

            </div>
        </>
    )
}
export default Item;