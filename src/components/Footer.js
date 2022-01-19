import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <FadeIn delay={10}>
        <div className="bg-bluenew py-6">
          <div className="container mx-auto ">
            <div className="grid grid-cols-3">
              <div className="mx-auto py-4">
                <div className="flex flex-col mx-auto ">
                  <Link to="/">
                    <div className="flex flex-row">
                      <img
                        src={require("../assets/anti-logo.jpg")}
                        alt="flood"
                        className="w-12 my-4 mx-2"
                      />
                      <span className="my-auto  text-2xl font-semibold font-inter text-white tracking-wider">
                        Flood Contour
                      </span>
                    </div>
                  </Link>
                  <Link to="/dashboard">
                    <p className=" text-lg leading-loose font-medium tracking-wide text-white font-inter ">
                      Dashboard
                    </p>
                  </Link>
                  <Link to="/helpline">
                    <p className=" text-lg leading-loose font-medium tracking-wide text-white font-inter">
                      Helpline Numbers
                    </p>
                  </Link>
                  <Link to="/about">
                    <p className=" text-lg leading-loose font-medium tracking-wide text-white font-inter">
                      About Us
                    </p>
                  </Link>
                </div>
              </div>
              <div className="mx-auto py-4">
                <div className="flex flex-col mx-auto">
                  <p className="my-6 text-2xl text-white font-inter tracking-wider font-semibold text-center">
                    Made By
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Prakhar Asaiya
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Sahil Silare
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Siddharth Mishra
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Amitesh Agrawal
                  </p>
                </div>
              </div>
              <div className="mx-auto py-4">
                <p className="my-6 text-2xl text-white font-inter font-semibold text-center ">
                  Meet Us at
                </p>
                <div className="mx-auto">
                  <iframe
                    className="my-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5490831480774!2d81.60284041490142!3d21.249722185879094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1642423467780!5m2!1sen!2sin"
                    width="450"
                    height={200}
                    loading="lazy"
                    title="map"
                  ></iframe>
                  {/* <iframe src="https://maps.googleapis.com/maps/api/staticmap?center=sedona&zoom=14&size=600x600&maptype=terrain&style=feature:all|visibility:off&style=feature:water|element:geometry|visibility:on&style=feature:landscape.natural|visibility:on|color:0xffffff&key=YOUR_API_KEY"></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkblue mx-auto">
          <p className="font-roboto text-white text-sm py-4 font-regular text-center">
            &copy; 2021 Flood Contour. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export default Footer;
