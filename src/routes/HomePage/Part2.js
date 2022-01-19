import React, { Component } from "react";
import FadeIn from "react-fade-in";
import CountUp from "react-countup";
import Map from "../../components/Map";
// const shortNum = require("number-shortener");
export default class Part2 extends Component {
  render() {
    return (
      <div className="container mx-auto py-12">
        <div className="mx-auto">
          <FadeIn delay={10}>
            <p className="text-5xl font-semibold font-inter text-center">
              Flood risk across India
            </p>

            <div className="mt-24 grid grid-cols-3 gap-8">
              <div className="mx-auto ">
                <p className="text-6xl font-inter font-semibold text-center">
                  <CountUp end={10} duration={2.75} />+<span></span>
                </p>
                <p className="py-2 text-2xl font-inter font-semibold text-center">
                  States affected
                </p>
              </div>
              <div className="mx-auto ">
                <p className="text-6xl font-inter font-semibold text-center">
                  <CountUp end={75} duration={2.75} />
                  <span> Lakhs+</span>
                </p>
                <p className="py-2 text-2xl font-inter font-semibold text-center">
                  Hectares destroyed
                </p>
              </div>
              <div className="mx-auto">
                <p className="text-6xl font-inter font-semibold text-center">
                  <CountUp end={1600} duration={2.75} />+
                </p>
                <p className="py-2 text-2xl font-inter font-semibold text-center">
                  Lives lost
                </p>
              </div>
            </div>
            <Map />
          </FadeIn>
        </div>
      </div>
    );
  }
}
