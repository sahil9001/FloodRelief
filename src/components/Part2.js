import React, { Component } from "react";
import FadeIn from "react-fade-in";
export default class Part2 extends Component {
  render() {
    return (
      <div className="container mx-auto py-12">
        <div className="mx-auto">
          <FadeIn>
            <p className="text-5xl font-semibold font-poppins text-center">
              Flood risk across India
            </p>
          </FadeIn>
          <div className="mt-24 grid grid-cols-3 gap-8">
            <div className="mx-auto ">
              <p className="text-6xl font-poppins font-semibold text-center">
                30+
              </p>
            </div>
            <div className="mx-auto ">
              <p className="text-6xl font-poppins font-semibold text-center">
                30+
              </p>
            </div>
            <div className="mx-auto">
              <p className="text-6xl font-poppins font-semibold text-center">
                30+
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
