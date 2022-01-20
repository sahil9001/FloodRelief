import React, { Component } from "react";
import Footer from "../../components/Footer";
import FadeIn from "react-fade-in";
export default class Dashboard extends Component {
  render() {
    return (
      <FadeIn>
        <div className="container mx-auto my-12">
          <p className="font-inter text-3xl font-bold">Dashboard</p>
        </div>
        <Footer />
      </FadeIn>
    );
  }
}
