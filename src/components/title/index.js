import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";

const  Title = (props) => <div className="ws-title">{props.children}</div>;

export default Title;