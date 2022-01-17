import React, { Component } from "react";
import FadeIn from "react-fade-in";
// import styles from "../src/styles/Part1.css"
export default class Part1 extends Component {
  render() {
    return (
      <FadeIn>
        <div className="bg-bluenew">
          <div className="container  mx-auto">
            <div className="grid grid-cols-2">
              <div className="mx-12 py-24">
                <FadeIn delay={100}>
                  <p className="font-poppins leading-tight tracking-wide font-semibold text-white text-6xl">
                    Flood relief made easy with flood contour
                  </p>
                  <button className="py-4 px-8 border-2 border-white my-4 hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold text-white color-text text-sm tracking-morewider px-4 py-2">
                    DASHBOARD
                  </button>
                </FadeIn>
              </div>
              <div className="mx-auto py-24">
                <img
                  src={require("../../src/assets/logo.jpg")}
                  className="w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
