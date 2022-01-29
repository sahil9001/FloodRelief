import React, { Component } from "react";
import Footer from "../../components/Footer";
import FadeIn from "react-fade-in";
import Leafletmap from "../leafletmap/Leafletmap";
import { Redirect } from "react-router-dom";
export default class Dashboard extends Component {
  render() {
    return <Redirect to="www.google.com" />;
  }
}
