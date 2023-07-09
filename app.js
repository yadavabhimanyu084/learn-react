const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Nested h1 tag"),
        React.createElement("h2", {}, "Nested h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Nested h1 tag"),
        React.createElement("h2", {}, "Nested h2 tag"),
    ]));
root.render(parent);