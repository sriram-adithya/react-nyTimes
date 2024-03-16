import React from "react";
import logo from "../assets/The_New_York_Times_logo.png";

const Footer = () => {
  return (
    <footer className="absolute left-8 bottom-0 xl:right-0 flex flex-col">
      <div className="border-b-4"></div>

      <div className="p-2">
        <a href="/">
          <img src={logo} alt={logo} width={182} height={44} />
        </a>
      </div>
      <div className="border-b-2"></div>
      <ul className="font-medium ml-2">
        <li className="py-4">
          <a href="News">NEWS</a>
        </li>
        <div className="border-b-2"></div>
        <li className="py-4">
          {" "}
          <a href="OPINION">OPINION</a>
        </li>
        <div className="border-b-2"></div>
        <li className="py-4">
          {" "}
          <a href="ARTS">ARTS</a>
        </li>
        <div className="border-b-2"></div>
        <li className="py-4">
          {" "}
          <a href="LIVING">LIVING</a>
        </li>
        <div className="border-b-2"></div>
        <li className="py-4">
          {" "}
          <a href="LISTINGS & MORE"> LISTINGS & MORE</a>
        </li>
        <div className="border-b-2"></div>
      </ul>
      <div className=" text-gray-600 flex whitespace-nowrap justify-between mt-4">
        <p>© 2024 The New York Times Company</p>
        <p>NYTCo</p>
        <p>Contact Us</p>
        <p>Accessibility</p>
        <p>Work With Us</p>
        <p>Advertise</p>
        <p>T Brand Studio</p>
        <p>Your Ad Choices</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Terms Of Sale</p>
        <p>Sitemap</p>
        <p>Canada</p>
        <p>International</p>
        <p>Help</p>
        <p>Subscriptions</p>
      </div>
    </footer>
  );
};

export default Footer;
