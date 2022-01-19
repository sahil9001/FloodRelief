import React, { Component } from "react";
// import {ReactComponent as Svg} from this.props.image;
import "./css/PrecautionaryCard.css";
export default class PrecautionaryCard extends Component {
  render() {
    return (
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex flex-col ">
          <div className="rounded-lg mx-auto">
            <div className="mx-auto">
              <img
                src={this.props.image}
                className="mx-auto py-4 object-cover img-1"
                alt="flood"
              />
            </div>
            <p className="text-center font-inter font-bold text-3xl">
              {this.props.title}
            </p>
          </div>
          <div className="rounded-lg mx-auto py-2 pb-4 px-12">
            <p className="text-center font-inter font-regular text-xl">
              {this.props.subject}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
