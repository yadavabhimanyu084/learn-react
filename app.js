import React from "react";
import ReactDOM from "react-dom/client";
//const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!!!");
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {id: "child1-1"}, "Nested h1 tag change it"),
        React.createElement("h2", {id: "child1-2"}, "Nested h2 tag change it"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {id: "child2-1"}, "Nested h1 tag, change it"),
        React.createElement("h2", {id: "child2-2"}, "Nested h2 tag"),
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 