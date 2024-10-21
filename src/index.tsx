import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "sentry-cordova";
import * as SentryReact from "@sentry/react";
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from "react-router-dom";
interface CordovaWindow extends Window {
    cordova: unknown | undefined
};

function startApp() {
    Sentry.init({
        debug: true,
        dsn: 'https://7e4fb5fbc26e4014acb13772e1782aea@o447951.ingest.us.sentry.io/5627302',
        tracesSampleRate: 1,
        enableTracing: true,
        replaysOnErrorSampleRate: 1,
        replaysSessionSampleRate: 1,
        integrations: [
            SentryReact.reactRouterV6BrowserTracingIntegration({
                useEffect,
                useLocation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes
            }),
            Sentry.replayIntegration(),
        ]
    });
    ReactDOM.render(<App />, document.getElementById("app"));
}

if ((window as unknown as CordovaWindow).cordova) {
    document.addEventListener('deviceready', startApp, false);
} 
else {
    startApp();
}