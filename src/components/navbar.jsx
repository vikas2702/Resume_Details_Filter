import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{

    state = {}

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0" style={{padding: "10px 2%"}}>
            <Link className="navbar-brand" to="/">JobSys</Link>
            <div className="">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/job/React">React</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/job/Angular">Angular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/job/Android">Android</Link>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Navbar;