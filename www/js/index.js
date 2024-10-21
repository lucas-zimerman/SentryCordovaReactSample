import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "sentry-cordova";
;
function startApp() {
    Sentry.init({
        debug: true,
        dsn: 'https://47c18fe4be4342e296cb70ea87fe3b28@o201058.ingest.us.sentry.io/5565891',
        tracesSampleRate: 1,
        replaysOnErrorSampleRate: 1,
        replaysSessionSampleRate: 1,
    });
    ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
}
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
}
else {
    startApp();
}
