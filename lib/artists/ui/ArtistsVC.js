import React, { Component } from "react";
import ArtistList from "./ArtistList";
import SearchBox from "./SearchBox";
import App from "../../App";

var artists = [
    { 
        name: "Taylor Swift",
        description: "Feat. Meghan Trainor, Katy Perry and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)"
    },
    {
        name: "The Weeknd",
        description: "Feat. August Alsina, Jeremih and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)"
    },
    {
        name: "Selena Gomez",
        description: "Feat. Ariana Grande, Demi Lovato and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)"
    },
    {
        name: "R. City",
        description: "Feat. Nelly, Iyaz, Wiz Khalifa and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)"
    },
    {
        name: "Justin Bieber",
        description: "Feat. Shawn Mendes, One Direction and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)"
    },
    {
        name: "Major Lazer",
        description: "Feat. Iyaz, Dillon Francis & DJ Snake and more",
        imageUrl: "http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)"
    }
];

export default class ArtistsVC extends Component {
    constructor() {
        super();
        this.state = { 
            searchQuery: "",
            artists };
        this.showSearchResults = this.showSearchResults.bind(this);
    }

    showSearchResults(artists) {
        this.setState({ artists });
    }

    _fetchArtists(searchQuery) {
        App.dispatchAction("loadArtists", {
            presenter: this,
            request: {
                url: `/test?keywords=${searchQuery}`
            }
        });
        this.setState({ searchQuery: "" });
    }

    _queryChange(searchQuery) {
        this.setState({ searchQuery });
    }

    render() {
        return (
            <section className="artists">
                <h1>Favorite Artists</h1>
                <SearchBox 
                    searchQuery={this.state.searchQuery} 
                    onSearch={this._fetchArtists.bind(this)}
                    onQueryChange={this._queryChange.bind(this)} />
                <ArtistList data={this.state.artists} />
            </section>
        );
    }
}
