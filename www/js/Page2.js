import React from "react";
import { useNavigate } from "react-router-dom";
var Page2 = function () {
    var navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page 2"),
        React.createElement("button", { type: "button", onClick: function () { return navigate("/page3"); } }, "Go to Page 3")));
};
export default Page2;
