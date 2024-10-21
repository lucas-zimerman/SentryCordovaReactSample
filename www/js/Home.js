import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Sentry from 'sentry-cordova';
import './styles.css';
var Home = function () {
    var navigate = useNavigate();
    var _a = useState('ios-button'), platformClass = _a[0], setPlatformClass = _a[1];
    function gotoPage1() {
        alert("we tried");
        Sentry.captureMessage('Hello World');
        navigate('/page1');
    }
    useEffect(function () {
        // @ts-ignore
        if (window.cordova && window.device) {
            // @ts-ignore
            var platform = window.device.platform;
            setPlatformClass(platform === 'Android' ? 'android-button' : 'ios-button');
        }
    }, []);
    return (React.createElement("div", { className: "button-list-container" },
        React.createElement("h1", null, "Hello, Sentry Cordova!"),
        React.createElement("button", { className: platformClass, type: "button", onClick: gotoPage1 }, "Go to Page 1"),
        React.createElement("button", { className: platformClass, type: "button", onClick: function () { return navigate('/page2'); } }, "Go to Page 2"),
        React.createElement("button", { className: platformClass, type: "button", onClick: function () { return navigate('/page3'); } }, "Go to Page 3")));
};
export default Home;
