import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sideBar d-none d-lg-block">
                <NavLink className="link" activeClassName="activeSideBar" to="/home" >
                    <span className="sidebarIcon">
                        <i className="fa fa-home" />
                    </span>
                    Dashboard
                </NavLink>
                <NavLink className="link" activeClassName="activeSideBar" to="/profile">
                    <span className="sidebarIcon">
                        <i className="fa fa-user" />
                    </span>
                    Profile
                </NavLink>
            </div>
        );
    }
}
export default Sidebar;