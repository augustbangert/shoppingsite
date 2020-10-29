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
                <BrowserRouter>
                    <head>
                        <title>b&#228;rosaurus</title>
                        <link
                            rel="icon"
                            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/sauropod_1f995.png"
                        />
                    </head>
                    <div id="header-div">
                        <img
                            id="cover-photo"
                            src="./david-and-toni.JPG"
                            alt="David and Toni"
                        />
                        <div id="navbar-div">
                            <div>
                                <a id="band-header" href="#about">
                                    b&#228;rosaurus
                                </a>
                            </div>
                            <Link to="/shows" className="navbar-link">
                                Shows
                            </Link>
                            <Link to="/music" className="navbar-link">
                                Music
                            </Link>
                            <Link to="/photos" className="navbar-link">
                                Photos
                            </Link>
                            <Link to="/email" className="navbar-link">
                                Email
                            </Link>
                            <Link to="/store" className="navbar-link">
                                Store
                            </Link>
                            <Link to="/contact" className="navbar-link">
                                Contact
                            </Link>
                        </div>
                    </div>
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
                            <h1>b&#228;rosaurus official site 🦕</h1>
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
