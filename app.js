import React from "react";
import ReactDOM from "react-dom/client";

const number = 10000;
const Title = () => <h1 className="head"> Learn React using JSX</h1>;

const HeadingComponent = () => (
  <React.Fragment>
    <div id="container">
      <h2>
        {number} --- {100 + 2636}
      </h2>
      {console.log("number  ", number)}
      <Title />
      <h1 className="heading"> Learn React Functionl Component</h1>
    </div>
    <div id="container2"></div>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
