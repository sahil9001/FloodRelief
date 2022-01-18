import React, { Component } from "react";
import FadeIn from "react-fade-in";

function Footer() {
  return (
    <div>
      <div className="bg-bluenew px-12 py-6">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-3">
            <div className="mx-auto py-4">
              <div className="flex flex-col mx-auto">
                <p className="text-3xl text-white font-roboto">Flood Contour</p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2">
                  Dashboard
                </p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2">
                  Helpline Numbers
                </p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2">
                  About Us
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto py-4">
                <div className="flex flex-col mx-auto">
                  <p className="text-3xl text-white font-roboto text-center">
                    Made By
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2 text-center">
                  Prakhar Asaiya
                </p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2 text-center">
                  Sahil Silare
                </p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2 text-center">
                  Siddharth Mishra
                </p>
                <p className="text-lg leading-loose font-medium tracking-wide text-white font-roboto py-2 text-center">
                  Amitesh Agrawal
                  </p>
                </div>
              </div>
            </div>
            <div>
                <div className="mx-auto py-4">
                    <p className="text-3xl text-white font-roboto text-center pb-4 pr-2">Meet Us at</p>
                    <div className="mx-auto">
                    <iframe className="pl-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5490831480774!2d81.60284041490142!3d21.249722185879094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1642423467780!5m2!1sen!2sin" width="450" height="150" allowfullscreen="" loading="lazy"></iframe>
                    </div>
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
    </div>
  );
}

export default Footer;
