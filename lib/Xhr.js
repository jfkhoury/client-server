export default class Xhr {
    constructor(origin) {
        this._origin = origin;
    }

    request(request) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();

            if (typeof request === "string") {
              request = { url: request };
            }

            xhr.open(request.method || "GET", this._origin + request.url, true);
            Object.keys(request.headers || {}).forEach(key => xhr.setRequestHeader(key, request.headers[key]));

            xhr.onreadystatechange = () => {
              if (xhr.readyState === xhr.DONE) {
                var headers = {};
                var htext = xhr.getAllResponseHeaders();
                htext.split(/\r?\n/).forEach((line) => {
                    var m = /^([^\s]*)\s*:\s*(.*)/.exec(line);
                    if (m) {
                        headers[m[1].toLowerCase()] = m[2];
                    }
                });
                var response = { status: xhr.status, body: xhr.responseText, headers: headers };
                resolve(response.body);
              }
            };

            console.log(request);
            xhr.send(request.body);
        });
    }
}
