import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default function Store() {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        // console.log("handleSubmit ran");
        e.preventDefault();
        sessionStorage.removeItem("item");
        sessionStorage.removeItem("quantity");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("size");
        sessionStorage.setItem("item", item);
        sessionStorage.setItem("quantity", quantity);
        sessionStorage.setItem("price", price);
        sessionStorage.setItem("size", size);
        // var currentItem = sessionStorage.getItem("item");
        // console.log("currentItem: ", currentItem); // works!!

        // axios
        //     .post("/store", purchaseInfo)
        //     .then((result) => {
        //         console.log("success from axios.post() via /store", result);
        //     })
        //     .catch((err) => {
        //         console.log("error from axios.post() via /store", err);
        //     });
    };

    return (
        <div id="login-div" className="component">
            <p>log in below:</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setItem(e.target.value)}
                    name="item"
                    placeholder="item"
                ></input>
                <input
                    type="text"
                    onChange={(e) => setQuantity(e.target.value)}
                    name="quantity"
                    placeholder="quantity"
                ></input>
                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    placeholder="price"
                ></input>
                <input
                    type="text"
                    onChange={(e) => setSize(e.target.value)}
                    name="size"
                    placeholder="size"
                ></input>
                <button>add to cart</button>
            </form>
            <br />
        </div>
    );
}

// ########################################### //
// ####### function component example ######## //
// ########################################### //

// import React, { useState, useEffect } from "react";
// import axios from "./axios";
// import { Link } from "react-router-dom";
// // import { response } from "express";

// export default function FindPeople() {
//     const [users, setUsers] = useState([]);
//     const [search, setSearch] = useState("");
//     const [results, setResults] = useState([]);

//     useEffect(() => {
//         console.log("mounted findpeople function ran");
//         let abort;
//         (async () => {
//             const { data } = await axios.get("/findpeople");
//             console.log("axios.get /findpeople ran");
//             if (!abort) {
//                 setUsers(data.rows);
//                 console.log("if !abort ran");
//             }
//         })();

//         if (search == "") {
//             setResults([]);
//             console.log("if search === '' ran");
//         } else {
//             (async () => {
//                 const { data } = await axios.get(
//                     `/findnewpeople?search=${search}`
//                 );
//                 setResults(data.rows);
//                 console.log("else search === '' ran");
//                 console.log("data.rows", data.rows);
//             })();
//         }
//         console.log("users:", users);
//         console.log("results: ", results);
//         return () => {
//             abort = true;
//         };
//     }, [search]);

//     return (
//         <div>
//             <h3>low-end search feature</h3>
//             <input
//                 type="text"
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="search bassists"
//             />
//             {search == "" && (
//                 <div>
//                     {users.map((user, index) => (
//                         // mapping our most recent users
//                         <Link key={index} to={`/user/${user.id}`}>
//                             <div>
//                                 <p>
//                                     {user.first} {user.last}
//                                 </p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//             {search != "" && (
//                 <div>
//                     {results.map((result, index) => (
//                         // mapping our most recent users
//                         <Link key={index} to={`/user/${result.id}`}>
//                             <div>
//                                 <p>
//                                     {result.first} {result.last}
//                                 </p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// ########################################### //
// ####### store.js as class component ####### //
// ########################################### //

// import React from "react";
// import axios from "./axios";
// import { Link } from "react-router-dom";

// export default class Store extends React.Component {
//     // removed default
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: "",
//             quantity: "",
//             price: "",
//             size: "",
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         // console.log("handleSubmit ran");
//         e.preventDefault();
//         // console.log("this.state", this.state);
//         // post request will be made by axios with following arguements
//         axios
//             .post("/store", this.state)
//             .then((result) => {
//                 console.log("success from axios.post() via /store", result);
//             })
//             .catch((err) => {
//                 console.log("error from axios.post() via /store", err);
//                 this.setState({ error: err });
//             });
//     }

//     render() {
//         return (
//             <div id="login-div" className="component">
//                 <p>log in below:</p>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="text"
//                         name="item"
//                         placeholder="item"
//                         onChange={this.handleChange}
//                     ></input>
//                     <input
//                         type="text"
//                         name="quantity"
//                         placeholder="quantity"
//                         onChange={this.handleChange}
//                     ></input>
//                     <input
//                         type="text"
//                         name="price"
//                         placeholder="price"
//                         onChange={this.handleChange}
//                     ></input>
//                     <input
//                         type="text"
//                         name="size"
//                         placeholder="size"
//                         onChange={this.handleChange}
//                     ></input>
//                     <button>add to cart</button>
//                 </form>
//                 <br />
//                 {this.state.error && (
//                     <p className="error">An error occured. Please retry.</p>
//                 )}
//             </div>
//         );
//     }
// }
