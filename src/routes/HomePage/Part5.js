import React, { Component } from "react";
import PrecautionaryCard from "./PrecautionaryCard";

export default class Part5 extends Component {
  render() {
    return (
      <div className="bg-gray-100 ">
        <div className="container mx-auto py-12">
          <p className="font-inter font-semibold text-5xl pb-12">
            Precautionary Measures
          </p>
          <div className="grid grid-cols-2 gap-16">
            <PrecautionaryCard
              title="Use helpline numbers"
              image={require("../../assets/1.png")}
              subject="In case of an emergency, call the helpline numbers provided on the website."
            />
            <PrecautionaryCard
              title="Check for Alerts"
              image={require("../../assets/2.png")}
              subject="Government of India has issued alerts for the flood in the past. Check for alerts to get supplies and rescue information."
            />
            <PrecautionaryCard
              title="Reach elevated places early"
              image={require("../../assets/3.png")}
              subject="It is recommended to reach the places which are at elevation at least 3 hours before the flood."
            />
            <PrecautionaryCard
              title="Stay in Groups"
              image={require("../../assets/4.png")}
              subject="In a life-threatening situation, it's better to stay with your family or in groups to survive."
            />
          </div>
        </div>
      </div>
    );
  }
}
