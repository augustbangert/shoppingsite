import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

function initializeReactGA() {
    ReactGA.initialize("UA-173969890-1");
    ReactGA.pageview("/homepage");
}

export default function Store() {
    return <div id="store-div">Store Data Here</div>;
}
