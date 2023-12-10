//react entry point
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
window.onload = ()=>{
    ReactDOM.render(<Layout />, document.getElementById("root"))
}