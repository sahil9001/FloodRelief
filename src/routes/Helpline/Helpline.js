import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../HomePage/css/Part1.css";
import { ReactComponent as Svg } from "../../assets/help.svg";
import Footer from "../../components/Footer";
export default class Helpline extends Component {
  render() {
    return (
      <FadeIn>
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="mx-12 py-24">
              <FadeIn delay={100}>
                <p className="font-inter leading-tight tracking-wide font-semibold  text-6xl">
                  Connect with Government registered helplines
                </p>
                <div className="flex flex-col py-4">
                  <ul className="list-disc list-inside ">
                    <li className="my-2">
                      <span className="font-inter  tracking-wide">
                        Statewise List of helpline numbers
                      </span>
                    </li>
                    <li>
                      <span className="font-inter  tracking-wide">
                        Immediate responses to flood alerts
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="w-1/2 text-center py-4 border-2 border-white my-4 bg-bluenew text-white hover:border-bluenew hover:bg-white hover:text-bluenew font-roboto font-semibold  color-text text-sm tracking-morewider "
                  >
                    ASK FOR HELP
                  </a>
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
        <Footer />
      </FadeIn>
    );
  }
}
