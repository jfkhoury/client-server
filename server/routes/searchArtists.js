var express = require('express');
var router = express.Router();
var request = require("request");

router.all('/', function(req, res) {
    var options = {
        url: "http://api-3283.iheart.com/api/v1/catalog/searchAll",
        headers: {
            accept: "application/json"
        },
        qs: {
            keywords: req.query.keywords,
            queryTrack: false,
            queryBundle: false,
            queryArtist: true,
            queryStation: false,
            queryFeaturedStation: false,
            queryTalkShow: false,
            queryTalkTheme: false,
            queryKeyword: false,
            countryCode: "US"
        }
    };
     
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(info);
        }
    });
});

module.exports = router;
