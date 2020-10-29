import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import Shows from "./shows";
import Music from "./music";
import Photos from "./photos";
import Email from "./email";
import Store from "./store";
import Contact from "./contact";

function initializeReactGA() {
    ReactGA.initialize("UA-173969890-1");
    ReactGA.pageview("/homepage");
}

export default function App() {
    return (
        <div id="app-div">
            <header>
                <h1>b&#228;rosaurus official site 🦕</h1>
                <BrowserRouter>
                    <Link to="/shows" className="link">
                        Shows
                    </Link>
                    <Link to="/music" className="link">
                        Music
                    </Link>
                    <Link to="/photos" className="link">
                        Photos
                    </Link>
                    <Link to="/email" className="link">
                        Email
                    </Link>
                    <Link to="/store" className="link">
                        Store
                    </Link>
                    <Link to="/contact" className="link">
                        Contact
                    </Link>
                    <Route exact path="/shows" render={() => <Shows />} />
                    <Route exact path="/music" render={() => <Music />} />
                    <Route exact path="/photos" render={() => <Photos />} />
                    <Route exact path="/email" render={() => <Email />} />
                    <Route exact path="/store" render={() => <Store />} />
                    <Route exact path="/contact" render={() => <Contact />} />
                </BrowserRouter>
            </header>
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div id="about-div">
                            <div>
                                <h2>About b&#228;rosaurus</h2>
                                <p>Wir sind bärosaurus aus Berlin ✌🏼🦕</p>
                            </div>
                        </div>
                    )}
                />
            </BrowserRouter>
            <p className="contact-details">booking: baerosaurus@gmail.com</p>
            <p className="contact-details">
                copyright (c) b&#228;rosaurus 2020
            </p>
        </div>
    );
}
