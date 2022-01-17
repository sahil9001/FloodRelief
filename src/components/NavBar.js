import React, { Component } from "react";
import FadeIn from "react-fade-in";
var test = require("../../src/assets/logo.jpg");
export default class NavBar extends Component {
  render() {
    return (
      <FadeIn>
        <div className="container mx-auto py-2">
          <FadeIn delay={100}>
            <nav className="flex flex-row">
              <img src={test} className="w-28" />

              <p className="text-2xl font-poppins font-semibold my-auto tracking-wider">
                Flood Contour
              </p>
              <div className="flex flex-row flex-1 gap-8 justify-end my-auto">
                <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                  DASHBOARD
                </button>
                <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                  HELPLINE NUMBERS
                </button>
                <button className="font-roboto font-semibold color-text text-sm tracking-morewider px-4 py-2">
                  ABOUT US
                </button>
              </div>
            </nav>
          </FadeIn>
        </div>
      </FadeIn>
    );
  }
}
