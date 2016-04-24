import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ArtistsVC from "./artists/ui/ArtistsVC";
import loadArtists from "./artists/actions/loadArtists";

App.registerAction("loadArtists", loadArtists);

var root = document.querySelector("main");
ReactDOM.render( <ArtistsVC />, root);