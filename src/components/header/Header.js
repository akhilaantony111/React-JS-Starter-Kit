import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";
import Modal from "react-responsive-modal";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            logoutPrompt: false
        }
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.onClickOutside)
    }
    onClickOutside = (e) => {
        if (this.refs.sidebarMobile && !this.refs.sidebarMobile.contains(e.target)) {
            if (this.state.toggle) {
                this.toggleSideBar();
            }
        }
    }
    logoutPrompt() {
        this.setState((prevState) => ({
            logoutPrompt: !prevState.logoutPrompt
        }))
    }
    logout() {
        localStorage.removeItem('loginToken');
        this.props.history.push('/');
    }
    toggleSideBar = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));

    }
    render() {
        var toggleClassName = this.state.toggle ? "sidebarMobile d-sm-block d-md-none animation" : "sidebarMobile d-sm-block d-md-none"
        return (
            <header className="header">
                <div className="d-flex justify-content-between">
                    <div className="headerLeft ">
                        <span onClick={() => this.toggleSideBar()} className="logout d-sm-block d-md-none">
                            <i className="fa fa-bars logoutIcon" aria-hidden="true" ></i>
                        </span>
                        <img alt="logo" className="logo d-none d-lg-block" src={require('../../assets/images/books.png')} />
                        <span className="headerTitle">
                            Readers Corner
                        </span>
                    </div>
                    <div className="headerRight">
                        <span onClick={() => { this.logoutPrompt(); }} className="logout">
                            <i className="fa fa-sign-out logoutIcon" aria-hidden="true" ></i>
                        </span>
                        <Modal
                            center
                            showCloseIcon={false}
                            focusTrapped={false}
                            open={this.state.logoutPrompt}
                            onClose={() => this.logoutPrompt()}
                            classNames={{
                                modal: "customModal",
                            }}
                        >
                            <div className="modalContent">
                                <p>Are you sure you want to logout ?</p>
                                <div className="d-flex justify-content-between innerModal">
                                    <p onClick={() => this.logout()}>
                                        OK
                                    </p>
                                    <p onClick={() => this.logoutPrompt()}>
                                        CANCEL
                                    </p>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                {/* Sidebar mobile */}
                <div className={toggleClassName} ref="sidebarMobile">
                    <div className="d-flex justify-content-around sideHeader">
                        <img alt="logo" className="logoMobile" src={require('../../assets/images/books.png')} />
                        <p className="username">Akhila Antony</p>
                    </div>
                    <div ref="navBar" >
                        <NavLink className="link" activeClassName="activeSideBar" to="/home" onClick={() => this.toggleSideBar()}>
                            <span className="sidebarIcon">
                                <i className="fa fa-home" />
                            </span>
                            Dashboard
                        </NavLink>
                        <NavLink className="link" activeClassName="activeSideBar" to="/profile" onClick={() => this.toggleSideBar()}>
                            <span className="sidebarIcon">
                                <i className="fa fa-user" />
                            </span>
                            Profile
                        </NavLink>
                    </div>
                </div>

            </header>
        );
    }
}

export default withRouter(Header);