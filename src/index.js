//react entry point
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
window.onload = ()=>{
    console.log("5o")
    ReactDOM.render(<Layout />, document.getElementById("root"))
}