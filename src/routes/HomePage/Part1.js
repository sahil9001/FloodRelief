import React, { Component } from "react";
import FadeIn from "react-fade-in";
// import styles from "../src/styles/Part1.css"
// import { ReactComponent as Svg } from "../assets/asset.svg";
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
                    Flood relief made easy with flood contour technology
                  </p>
                  <div className="flex flex-col py-4">
                    <ul class="list-disc list-inside text-white">
                      <li className="my-2">
                        <span className="font-poppins text-white tracking-wide">
                          Flood detection mechanism
                        </span>
                      </li>
                      <li>
                        <span className="font-poppins text-white tracking-wide">
                          Contour analysis for affected regions
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row gap-4">
                    <button className="w-1/3 py-4 border-2 border-white my-4 hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold text-white color-text text-sm tracking-morewider ">
                      DASHBOARD
                    </button>
                    <button className="w-1/3 py-4 border-2 border-white my-4 hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold text-white color-text text-sm tracking-morewider ">
                      HELPLINE NUMBERS
                    </button>
                  </div>
                </FadeIn>
              </div>
              <div className="mx-auto my-auto py-24">
                <FadeIn delay={100}>
                  <img
                    src={require("../../assets/anti-logo.jpg")}
                    className="w-64"
                    alt="flood"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
