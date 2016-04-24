import Xhr from "./Xhr";
import Q from "q";

var actions = {};
const ORIGIN = "http://localhost:3000";
const xhr = new Xhr(ORIGIN);

var App = {
    config: {
        origin: ORIGIN
    },
    dispatchAction: (actionName, params) => {
        var action = actions[actionName];
        
        if (action) {
            return action(params);
        }

        return Q.resolve();
    },
    registerAction: (actionName, action) => {
        actions[actionName] = action;
    },
    xhr
};

export default App;
