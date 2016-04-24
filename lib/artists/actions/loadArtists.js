import App from "../../App";
import Artist from "../models/Artist";

export default function loadArtists({ presenter, request }) {
    // TODO Abstract out the XHR call to a gateway since the action should do this detailed work.
    // Fetch data, generate models then pass them to presenter, in this case our React VC.
    return App.xhr.request(request).then(response => {
        var data = JSON.parse(response);
        var artistsDto = data.artists ? data.artists.slice(0, 6) : [];
        presenter.showSearchResults(artistsDto.map(aDto => new Artist(aDto)));
    });
}
