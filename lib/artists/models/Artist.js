
// We could have used an object literal in here for simplicity.
export default class Artist {
    constructor(dto) {
        this._dto = dto;
    }

    get name() {
        return this._dto.artistName;
    }

    get description() {
        return "";
    }

    get imageUrl() {
        const IMAGE_ORIGIN = "http://iscale.iheart.com/catalog/artist/";
        const IMAGE_SIZE_OPT = "?ops=fit(250,0)";
        return `${IMAGE_ORIGIN}${this._dto.artistId}${IMAGE_SIZE_OPT}`;
    }
}
