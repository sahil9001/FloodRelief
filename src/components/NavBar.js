import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
var test = require("../../src/assets/logo.jpg");
export default class NavBar extends Component {
  render() {
    return (
      <FadeIn>
        {/* <div className="fixed"> */}
        <div className="container mx-auto py-2">
          <FadeIn delay={100}>
            <nav className="flex flex-row">
              <Link to="/">
                <div className="flex flex-row">
                  <img src={test} className="w-12 my-4 mx-2" alt="logo" />
                  <p className="text-2xl font-poppins font-semibold my-auto tracking-wider">
                    Flood Contour
                  </p>
                </div>
              </Link>
              <div className="flex flex-row flex-1 gap-8 justify-end my-auto">
                <Link to="/dashboard">
                  <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                    DASHBOARD
                  </button>
                </Link>
                <Link to="/helpline">
                  <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                    HELPLINE NUMBERS
                  </button>
                </Link>
                <Link to="/about">
                  <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                    ABOUT US
                  </button>
                </Link>
              </div>
            </nav>
          </FadeIn>
        </div>
        {/* </div> */}
      </FadeIn>
    );
  }
}
