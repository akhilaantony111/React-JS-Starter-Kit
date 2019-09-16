webpackHotUpdate("main",{

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./src/components/header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sayone/Documents/react-web-app/src/components/header/Header.js";





class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onClickOutside = e => {
      if (this.refs.sidebarMobile && !this.refs.sidebarMobile.contains(e.target)) {
        if (this.state.toggle) {
          this.toggleSideBar();
        }
      }
    };

    this.toggleSideBar = () => {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }), () => {
        localStorage.setItem('toggled', this.state.toggle);
      });
    };

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.onClickOutside);
  }

  logout() {
    localStorage.removeItem('loginToken');
    this.props.history.push('/');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "headerLeft ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: () => this.toggleSideBar(),
      className: "logout d-sm-block d-md-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-bars logoutIcon",
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "logo",
      className: "logo d-none d-lg-block",
      src: __webpack_require__(/*! ../../assets/images/books.png */ "./src/assets/images/books.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "headerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Readers Corner")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "headerRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: () => {
        this.logout();
      },
      className: "logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-sign-out logoutIcon",
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })))), this.state.toggle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebarMobile d-sm-block d-md-none",
      ref: "sidebarMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-around sideHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "logo",
      className: "logoMobile",
      src: __webpack_require__(/*! ../../assets/images/bg.png */ "./src/assets/images/bg.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Akhila Antony")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      className: "link",
      activeClassName: "activeSideBar",
      to: "/home",
      onClick: () => this.toggleSideBar(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      className: "link",
      activeClassName: "activeSideBar",
      to: "/profile",
      onClick: () => this.toggleSideBar(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Profile")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=main.00b84ee68056aa254672.hot-update.js.map