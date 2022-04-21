import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
    return (
        <div className="main">
            <Navbar/>
            <Main/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
