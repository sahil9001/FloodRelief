// import { findByLabelText } from "@testing-library/react";
import React, { Component } from "react";

export default class AboutCard extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col">
          <img
            src={this.props.url}
            alt="flood"
            style={{ height: "600px", width: "full" }}
            className="object-cover rounded-3xl"
          />
          <p className="text-2xl font-medium font-inter text-center py-2 tracking-wide">
            {this.props.name}
          </p>
          <p className="text-lg font-regular font-inter text-center tracking-wide">
            {this.props.occupation}
          </p>
        </div>
      </div>
    );
  }
}
