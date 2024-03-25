import React from "react";
import logo from "/react-nyTimes/src/assets/The_New_York_Times_logo.png";
import document from "/react-nyTimes/src/assets/image.png";
import games from "/react-nyTimes/src/assets/games.png";
import digital from "/react-nyTimes/src/assets/digital.png";
import cooking from "/react-nyTimes/src/assets/cooking.png"


// Note: YET TO REPLACE ANCHOR ELEMENT IN ALL LI TAG

const Footer = () => {
  return (
    <footer className="ml-48 lg:ml-10 mr-52 lg:mr-10 whitespace-nowrap ">
      <div className="border-b-4"></div>

      <div className="p-2">
        <a href="/">
          <img src={logo} alt={logo} width={182} height={44} />
        </a>
      </div>
      <div className="border-b-2"></div>
      <ul className=" font-bold lg:ml-2 flex lg:flex-col justify-between">
        <li className="py-4">
          <a href="News">NEWS</a>
          <ul className="cursor-pointer lg:hidden block font-normal"> 
            <li className="hover:underline py-1 text-base">Home Page</li>
            <li className="hover:underline py-1 text-base">World</li>
            <li className="hover:underline py-1 text-base">Coronavirus</li>
            <li className="hover:underline py-1 text-base">U.S. News</li>
            <li className="hover:underline py-1 text-base">U.S. Politics</li>
            <li className="hover:underline py-1 text-base">New York</li>
            <li className="hover:underline py-1 text-base">Business</li>
            <li className="hover:underline py-1 text-base">Tech</li>
            <li className="hover:underline py-1 text-base">Science</li>
            <li className="hover:underline py-1 text-base">Sports</li>
            <li className="hover:underline py-1 text-base">Wildfire Tracker</li>
            <li className="hover:underline py-1 text-base">Obituaries</li>
            <li className="hover:underline py-1 text-base">Today's Paper</li>
            <li className="hover:underline py-1 text-base">Trending</li>
            <li className="hover:underline py-1 text-base">Corrections</li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="OPINION">OPINION</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base">Today's Opinion</li>
            <li className="hover:underline py-1 text-base">Columnists</li>
            <li className="hover:underline py-1 text-base">Editorials</li>
            <li className="hover:underline py-1 text-base">Guest Essays</li>
            <li className="hover:underline py-1 text-base">Letters</li>
            <li className="hover:underline py-1 text-base">Sunday Opinion</li>
            <li className="hover:underline py-1 text-base">Opinion Video</li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="ARTS">ARTS</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base">Today's Arts</li>
            <li className="hover:underline py-1 text-base">Art & Design</li>
            <li className="hover:underline py-1 text-base">Books</li>
            <li className="hover:underline py-1 text-base">Best Sellers Book List</li>
            <li className="hover:underline py-1 text-base">Dance</li>
            <li className="hover:underline py-1 text-base">Movies</li>
            <li className="hover:underline py-1 text-base">Music</li>
            <li className="hover:underline py-1 text-base">Pop Culture</li>
            <li className="hover:underline py-1 text-base">Science</li>
            <li className="hover:underline py-1 text-base">Theater</li>
            <li className="hover:underline py-1 text-base">Video: Arts</li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="LIVING">LIVING</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base">Automotive</li>
            <li className="hover:underline py-1 text-base">Games</li>
            <li className="hover:underline py-1 text-base">Education</li>
            <li className="hover:underline py-1 text-base">Food</li>
            <li className="hover:underline py-1 text-base">Health</li>
            <li className="hover:underline py-1 text-base">Jobs</li>
            <li className="hover:underline py-1 text-base">Love</li>
            <li className="hover:underline py-1 text-base">Magazine</li>
            <li className="hover:underline py-1 text-base">Parenting</li>
            <li className="hover:underline py-1 text-base">Real Estate</li>
            <li className="hover:underline py-1 text-base">Style</li>
            <li className="hover:underline py-1 text-base">T Magazine</li>
            <li className="hover:underline py-1 text-base">Travel</li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4 hidden lg:block">
          {" "}
          <a href="LISTINGS & MORE"> LISTINGS & MORE</a>
        </li> 
        <li className="py-4 lg:hidden block">
          {" "}
          <a href="More">More</a>
          <ul className="cursor-pointer lg:hidden block font-normal"> 
            <li className="hover:underline py-1 text-base">Reader Center</li>
            <li className="hover:underline py-1 text-base">The Athletic</li>
            <li className="hover:underline py-1 text-base">Wirecutter</li>
            <li className="hover:underline py-1 text-base">Cooking</li>
            <li className="hover:underline py-1 text-base">Headway</li>
            <li className="hover:underline py-1 text-base">Live Events</li>
            <li className="hover:underline py-1 text-base">The Learning Network</li>
            <li className="hover:underline py-1 text-base">Podcasts</li>
            <li className="hover:underline py-1 text-base">Video</li>
            <li className="hover:underline py-1 text-base">Graphics</li>
            <li className="hover:underline py-1 text-base">TimesMachine</li>
            <li className="hover:underline py-1 text-base">Times Store</li>
            <li className="hover:underline py-1 text-base">Manage My Account</li>
            <li className="hover:underline py-1 text-base">Gift Articles</li>
            <li className="hover:underline py-1 text-base">NYTLicensing</li>
          </ul>
        </li>
        <div className="border-b-2"></div>

    {/* NEED TO CHECK the border */}
        
        <li className="py-4 pl-3 pr-14 block lg:hidden cursor-pointer border-l-2">
          {" "}
          <a href="SUBSCRIBE">SUBSCRIBE</a>
          <div className="flex flex-col"> 
            <a href="/" className="font-bold text-xl hover:underline py-1"><img src={document} alt="" className="inline-block pr-2"/>Home Delivery</a>
            <a href="/" className="font-bold text-xl hover:underline py-1"><img src={digital} alt="" className="inline-block pr-2"/>Digital Subscriptions</a>
            <a href="/" className="font-bold text-xl hover:underline py-1"><img src={games} alt="" className="inline-block pr-2"/>Games</a>
            <a href="/" className="font-bold text-xl hover:underline py-1"><img src={cooking} alt="" className="inline-block pr-2"/>Cooking</a>
          </div>


          <p className="text-sm font-normal pt-7 hover:underline">Email Newsletters</p>
          <p className="text-sm font-normal hover:underline pt-2">Corporate Subscriptions</p>
          <p className="text-sm font-normal hover:underline pt-2">Education Rate</p>
          <p className="border-b-2 py-1"></p>
          <ul className="pt-4 text-sm font-normal">
            <li className="py-2 hover:underline">Mobile Application</li>
            <li className="py-2 hover:underline">Replica Edition</li>
            <li className="py-2 hover:underline">International</li>
            <li className="py-2 hover:underline">Canada</li>
            <li className="py-2 hover:underline">Español</li>
            <li className="py-2 hover:underline">中文网</li>
          </ul>
        </li>
      </ul>
      <div className="border-b-2 lg:hidden block"></div>
      <div className="flex justify-center items-center text-sm text-gray-700 hover:underline">
        <a href="/"> © 2024 The New York Times Company</a>
      </div>
      <div className="my-5 text-sm text-gray-600 whitespace-nowrap text-center">
        <ul className="flex flex-row justify-center flex-wrap">
          <li className="p-2 hover:underline"><a href="/">NYTCo</a></li>
          <li className="p-2 hover:underline"><a href="/">Contact</a> Us</li>
          <li className="p-2 hover:underline"><a href="/">Accessibility</a></li>
          <li className="p-2 hover:underline"><a href="/">Work With Us</a></li>
          <li className="p-2 hover:underline"><a href="/">Advertise</a></li>
          <li className="p-2 hover:underline"><a href="/">T Brand Studio</a></li>
          <li className="p-2 hover:underline"><a href="/">Your Ad Choices</a></li>
          <li className="p-2 hover:underline"><a href="/">Privacy Policy</a></li>
          <li className="p-2 hover:underline"><a href="/">Terms Of Service</a></li>
          <li className="p-2 hover:underline"><a href="/">Terms Of Sale</a></li>
          <li className="p-2 hover:underline"><a href="/">Sitemap</a></li>
          <li className="p-2 hover:underline"><a href="/">Canada</a></li>
          <li className="p-2 hover:underline"><a href="/">International</a></li>
          <li className="p-2 hover:underline"><a href="/">Help</a></li>
          <li className="p-2 hover:underline"><a href="/">Subscriptions</a></li>
        </ul>

      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
