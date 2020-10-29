import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

function initializeReactGA() {
    ReactGA.initialize("UA-173969890-1");
    ReactGA.pageview("/homepage");
}

export default function Music() {
    return <div id="music-div">Music Data Here</div>;
}
