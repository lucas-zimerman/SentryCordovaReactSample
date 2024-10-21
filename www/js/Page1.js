import React from "react";
import { useNavigate } from "react-router-dom";
var Page1 = function () {
    var navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page 1"),
        React.createElement("button", { type: "button", onClick: function () { return navigate("/page2"); } }, "Go to Page 2")));
};
export default Page1;
