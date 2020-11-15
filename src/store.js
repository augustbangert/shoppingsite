import React, { useState, useEffect } from "react";
// import axios from "./axios";
// import { Link } from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export default function Store() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState("products");

    const [products] = useState([
        {
            name: "T-Shirt",
            cost: "$9.99",
            image:
                "https://www.asket.com/img/format=jpeg,width=1250,quality=70/https://asket.centracdn.net/client/dynamic/images/2_91cd261056-asket_tee_white_slide_01-original.jpg",
        },
        {
            name: "Sweater",
            cost: "$19.99",
            image:
                "https://content.backcountry.com/images/items/900/PAT/PAT02JK/DRIGREPIN.jpg",
        },
    ]);

    const addToCart = (product) => {
        setCart([...cart, { ...product }]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove));
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => (
        <>
            <h1>Merch</h1>
            <div className="products">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );

    const renderCart = () => (
        <>
            <h1>Cart</h1>
            <div className="products">
                {cart.map((product, index) => (
                    <div className="product" key={index}>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => removeFromCart(product)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div id="store-div" className="component">
            <div id="cart-header">
                <button onClick={() => navigateTo(PAGE_CART)}>
                    Go to Cart ({cart.length})
                </button>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
                    View Merch
                </button>
            </div>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
        </div>
    );
}
