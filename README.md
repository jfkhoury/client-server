# React + Node a[[]]

## How to run app

1. Open terminal, navigate to server
2. npm install
3. node index.js
4. Open second terminal, navigate to root
5. npm install
6. npm start

## Architecture

### Client overview

We have a simple App object that can dispatch actions (Read below), expose a XHR object that we will use to submit requests to our server. The App is just a simple object literal for now, but it can get more complicated and maybe provide error handling, logging, provides an event bus and so on.

Component:

Actions:

Artists component contains a UI layer rendered using React, actions which plays the role of a use case or feature which 
list the recipe for this use case.
In this case, the loadArtists action will fetch the artists by request, and define an interface for the presenter to implement so it can receive the final data.
This will allow us to plug in any UI and this action does not need to change.

TODO I would have liked to extract out the XHR details into a Gateway, but didn't want to over engineer the solution anymore.

UI:

The UI is composed of a VC which loads some default data, and has 2 simple components as children: The ArtistList and SearchBox.

CSS:

The responsive design is implemented using media queries, and a simple display inline block boxes with flexible widths. 

TODO Implement using flexbox.

### Server
Simple express server that acts as proxy to the iHeartRadio API.

## General todos

- Add tests
- Style the header
- Register action with App from within the Artists component

