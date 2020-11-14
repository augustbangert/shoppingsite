import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default function Store() {
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

    return (
        <div id="store-div" className="component">
            <h1>Merch</h1>
            <div className="products">
                {products.map((product) => (
                    <div>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img src={product.image} alt={product.name} />
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ####################################### //
// ############ CART ATTEMPT 1 ########### //
// ####################################### //

// export default function Store() {
//     const [item, setItem] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [size, setSize] = useState("");
//     const [total, setTotal] = useState("");

//     const handleSubmit = (e) => {
//         // console.log("handleSubmit ran");
//         e.preventDefault();

//         var cart = {
//             item: item,
//             price: quantity * 10,
//             quantity: quantity,
//             size: size,
//         };
//         var jsonStr = JSON.stringify(cart);
//         sessionStorage.setItem("cart", jsonStr);
//         console.log("jsonStr", jsonStr);
//         // sessionStorage.removeItem("item");
//         // sessionStorage.removeItem("quantity");
//         // sessionStorage.removeItem("size");
//         // sessionStorage.setItem("item", item);
//         // sessionStorage.setItem("quantity", quantity);
//         // sessionStorage.setItem("size", size);

//         // var currentItem = sessionStorage.getItem("item");
//         // console.log("currentItem: ", currentItem); // works!!

//         // axios
//         //     .post("/store", purchaseInfo)
//         //     .then((result) => {
//         //         console.log("success from axios.post() via /store", result);
//         //     })
//         //     .catch((err) => {
//         //         console.log("error from axios.post() via /store", err);
//         //     });
//     };

//     return (
//         <div id="login-div" className="component">
//             <p>Store Data Here</p>
//             <div>
//                 <p></p>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     onChange={(e) => setItem(e.target.value)}
//                     name="item"
//                     placeholder="item"
//                 ></input>
//                 <input
//                     type="text"
//                     onChange={(e) => setQuantity(e.target.value)}
//                     name="quantity"
//                     placeholder="quantity"
//                 ></input>
//                 <input
//                     type="text"
//                     onChange={(e) => setSize(e.target.value)}
//                     name="size"
//                     placeholder="size"
//                 ></input>
//                 <button>add to cart</button>
//             </form>
//             <br />
//         </div>
//     );
// }
