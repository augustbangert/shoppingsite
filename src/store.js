import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export class Store extends React.Component {
    // removed default
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            quantity: "",
            price: "",
            size: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // console.log("handleSubmit ran");
        e.preventDefault();
        // console.log("this.state", this.state);
        // post request will be made by axios with following arguements
        axios
            .post("/store", this.state)
            .then((result) => {
                console.log("success from axios.post() via /store", result);
            })
            .catch((err) => {
                console.log("error from axios.post() via /store", err);
                this.setState({ error: err });
            });
    }

    render() {
        return (
            <div id="login-div" className="component">
                <p>log in below:</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    ></input>
                    {/* <select name="select" onChange={this.num}>
                        {num.map(function (n) {
                            return (
                                <option
                                    value={n}
                                    selected={this.state.selected === n}
                                >
                                    {n}
                                </option>
                            );
                        })}
                    </select> */}
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleChange}
                    ></input>
                    <button>log in</button>
                </form>
                <br />
                {this.state.error && (
                    <p className="error">
                        An error occured. Please re-enter your details.
                    </p>
                )}
                <Link to="/resetpassword" className="link">
                    forgot password?
                </Link>
            </div>
        );
    }
}
