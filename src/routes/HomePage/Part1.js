import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import "./css/Part1.css";
import { ReactComponent as Svg } from "../../assets/home.svg";
export default class Part1 extends Component {
  render() {
    return (
      <FadeIn>
        <div className="bg-bluenew">
          <div className="container  mx-auto">
            <div className="grid grid-cols-2">
              <div className="mx-12 py-24">
                <FadeIn delay={100}>
                  <p className="font-inter leading-tight tracking-wide font-semibold text-white text-6xl">
                    Flood relief made easy with flood contour technology
                  </p>
                  <div className="flex flex-col py-4">
                    <ul className="list-disc list-inside text-white">
                      <li className="my-2">
                        <span className="font-inter text-white tracking-wide">
                          Flood detection mechanism
                        </span>
                      </li>
                      <li>
                        <span className="font-inter text-white tracking-wide">
                          Contour analysis for affected regions
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Link
                      to="/dashboard"
                      className="w-1/3 text-center py-4 border-2 border-white my-4 hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold text-white color-text text-sm tracking-morewider "
                    >
                      DASHBOARD
                    </Link>
                    <Link
                      to="/helpline"
                      className="w-1/3 text-center py-4 border-2 border-white my-4 hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold text-white color-text text-sm tracking-morewider "
                    >
                      HELPLINE NUMBERS
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="mx-auto my-auto py-24">
                <FadeIn delay={100}>
                  <Svg className="img-2" />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
