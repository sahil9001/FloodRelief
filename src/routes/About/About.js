import React, { Component } from "react";
import AboutCard from "./AboutCard";

export default class About extends Component {
  render() {
    return (
      <div className="container mx-auto my-12">
        <div className="mx-auto">
          <p className="font-inter text-center text-5xl font-medium tracking-wide">
            Meet the Team
          </p>
          <div className="grid grid-cols-3 gap-4 py-12">
            <div className="col-start-2">
              <p className="font-inter text-center text-xl leading-relaxed font-medium tracking-wide">
                We are a bunch of software developers from NITRR who are
                passionate, dedicated and love to code!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 py-6">
            <AboutCard
              name="Siddharth Mishra"
              occupation="Presentation Lead & Designer"
              url={require("../../assets/siddharth.jpeg")}
            />

            <AboutCard
              name="Prakhar Asaiya"
              occupation="Fullstack Developer"
              url={require("../../assets/prakhar.jpg")}
            />
            <AboutCard
              name="Sahil Silare"
              occupation="Fullstack Developer & Designer"
              url={require("../../assets/sahil.jpeg")}
            />
            <AboutCard
              name="Amitesh Agrawal"
              occupation="Team Member"
              url={require("../../assets/amitesh.jpeg")}
            />
          </div>
        </div>
      </div>
    );
  }
}
