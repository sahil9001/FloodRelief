import React, { Component } from "react";
import "../HomePage/css/Part4.css";
import { ReactComponent as Svg1 } from "../../assets/Path 6773.svg";
import { ReactComponent as Svg2 } from "../../assets/Path 6774.svg";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
export default class Part4 extends Component {
  render() {
    return (
      <FadeIn delay={10}>
        <div className="bg-part7">
          <div className="container mx-auto px-4 sm:px-0">
            <div className="flex flex-col py-24 sm:mx-36">
              <div className="flex-1">
                <p
                  className="
              text-white
              font-inter
              text-center text-3xl
              sm:text-5xl
              font-semibold
            "
                >
                  How it works
                </p>
              </div>
              <div className="flex-1 pb-12">
                <p
                  className="
              color-green
              text-white
              font-inter
              text-center text-lg
              sm:text-xl
              font-medium
            "
                >
                  Get started with 3 easy steps
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-initial py-2 sm:py-4 lg:py-0">
                  <p
                    className="
                color-subheading
                font-inter
                text-7xl
                font-extrabold
                text-center
              "
                  >
                    1
                  </p>
                  <p
                    className="
                text-white
                font-inter
                text-lg
                sm:text-firstpagecardheading
                text-center
                sm:text-left
              "
                  >
                    Go to Dashboard
                  </p>
                </div>
                <div className="flex-1 hidden lg:block transform translate-y-28">
                  <Svg1 className="mx-auto" />
                </div>
                <div className="flex-initial py-4 lg:py-0">
                  <p
                    className="
                color-subheading
                font-inter
                text-7xl
                font-extrabold
                text-center
              "
                  >
                    2
                  </p>
                  <p
                    className="
                text-white
                font-inter
                text-lg
                sm:text-firstpagecardheading
                text-center
                sm:text-left
              "
                  >
                    Allow Location Access
                  </p>
                </div>
                <div className="flex-1 hidden lg:block transform translate-y-4">
                  <Svg2 className="mx-auto" />
                </div>
                <div className="flex-1 py-4 lg:py-0">
                  <p
                    className="
                color-subheading
                font-inter
                text-7xl
                font-extrabold
                text-center
                sm:text-left
              "
                  >
                    3
                  </p>
                  <p
                    className="
                text-white
                font-inter
                text-lg
                sm:text-firstpagecardheading
                text-center
                sm:text-left
              "
                  >
                    Get contour data of the region
                  </p>
                </div>
              </div>
              <div class="flex-1 mx-auto mt-24">
                <Link
                  to="/dashboard"
                  className="
              text-white
              font-inter
              text-center text-xl
              font-medium
              mx-auto
              px-12
              py-6
              mt-12
              bg-bluenew
              rounded-lg
              border-2 border-bluenew
              hover:text-bluenew hover:bg-white hover:border-bluenew
            "
                  // @click="gotoSupplierSignUp"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
