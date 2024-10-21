import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
var App = function () {
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/page1", element: React.createElement(Page1, null) }),
            React.createElement(Route, { path: "/page2", element: React.createElement(Page2, null) }),
            React.createElement(Route, { path: "/page3", element: React.createElement(Page3, null) }))));
};
export default App;
