import React from "react"
import logo from "../images/react_logo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo}></img>
                <h1>ReactFacts</h1>
            </div>

            <div className="labels">
                <h2>React Course - Project 1</h2>
            </div>
        </nav>
    );
}

