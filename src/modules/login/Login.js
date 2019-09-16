import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ActionCreators } from '../../actions/index';
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: localStorage.getItem('loginToken')
        }
    }
    onChangetext = (e, val) => {
        this.setState({
            [val]: e.target.value
        });
    }
    login = () => {
        // Correct credentials - email : eve.holt@reqres.in , password: cityslicka
        var { email, password } = this.state;
        if (email !== "" && password !== "") {
            let params = {
                email: email,
                password: password
            }
            this.props.actions.login(params).then(() => {
                if (this.props.loginSuccess === true) {
                    //Navigate to Home
                    this.props.history.push('/home');
                }
                else {
                    alert(this.props.loginError);
                }
            });
        }
        else {
            alert("Enter email and password to login")
        }
    }
    render() {
        var { isLoggedIn, email, password } = this.state;
        if (isLoggedIn !== null && isLoggedIn !== undefined) {
            return <Redirect to="/home" /> //If logged in user will not show login screen if browser back button or url is entered
        }
        else {
            return (
                <div className="login-content">
                    <div className="container-fluid mainContainer row">

                        <div className="col-md-8 leftContainer d-none d-lg-block"> {/* d-none is display: none , d-lg-block is display:block from large devices only */}
                        </div>
                        <div className="col-lg-4 col-12 rightContainer"> {/* Taking 4 out of 12 from larger devices in small devices it will take 12 */}
                            <span className="loginHeading">READERS CORNER</span>
                            <div className="loginContainer">
                                <label>Email address</label>
                                <input type="email" className="form-control inputField"  value={email} onChange={(e) => this.onChangetext(e, 'email')} />
                                <label>Password</label>
                                <input type="password" className="form-control inputField" value={password} onChange={(e) => this.onChangetext(e, 'password')} />
                                <div className="buttonContainer">
                                    <button type="button" onClick={() => {
                                        this.login();
                                    }
                                    } className="loginButton">LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginSuccess: state.login.loginSuccess,
        loginError: state.login.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));