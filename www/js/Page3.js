import React from "react";
import { useNavigate } from "react-router-dom";
var Page3 = function () {
    var navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page 3"),
        React.createElement("button", { type: "button", onClick: function () { return navigate("/"); } }, "Go to Page 1")));
};
export default Page3;
