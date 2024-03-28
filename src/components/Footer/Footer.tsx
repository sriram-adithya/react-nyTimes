import logo from "../../assets/The_New_York_Times_logo.png"
import document from "../../assets/image.png"
import games from "../../assets/games.png"
import digital from "../../assets/digital.png"
import cooking from "../../assets/cooking.png"


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
          <a href="/">NEWS</a>
          <ul className="cursor-pointer lg:hidden block font-normal"> 
            <li className="hover:underline py-1 text-base"><a href="/">Home Page</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">World</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Coronavirus</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">U.S. News</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">U.S. Politics</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">New York</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Business</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Tech</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Science</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Sports</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Wildfire Tracker</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Obituaries</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Today's Paper</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Trending</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Corrections</a></li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="/">OPINION</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base"><a href="/">Today's Opinion</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Columnists</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Editorials</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Guest Essays</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Letters</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Sunday Opinion</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Opinion Video</a></li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="/">ARTS</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base"><a href="/">Today's Arts</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Art & Design</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Books</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Best Sellers Book List</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Dance</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Movies</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Music</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Pop Culture</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Science</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Theater</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Video: Arts</a></li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4">
          {" "}
          <a href="/">LIVING</a>
          <ul className="cursor-pointer lg:hidden block font-normal">
            <li className="hover:underline py-1 text-base"><a href="/">Automotive</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Games</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Education</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Food</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Health</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Jobs</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Love</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Magazine</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Parenting</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Real Estate</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Style</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">T Magazine</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Travel</a></li>
          </ul>
        </li>
        <div className="border-b-2"></div>

        <li className="py-4 hidden lg:block">
          {" "}
          <a href="LISTINGS & MORE"> LISTINGS & MORE</a>
        </li> 
        <li className="py-4 lg:hidden block">
          {" "}
          <a href="/">More</a>
          <ul className="cursor-pointer lg:hidden block font-normal"> 
            <li className="hover:underline py-1 text-base"><a href="/">Reader Center</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">The Athletic</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Wirecutter</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Cooking</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Headway</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Live Events</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">The Learning Network</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Podcasts</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Video</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Graphics</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">TimesMachine</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Times Store</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Manage My Account</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">Gift Articles</a></li>
            <li className="hover:underline py-1 text-base"><a href="/">NYTLicensing</a></li>
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


          <p className="text-sm font-normal pt-7 hover:underline"><a href="/">Email Newsletters</a></p>
          <p className="text-sm font-normal hover:underline pt-2"><a href="/">Corporate Subscriptions</a></p>
          <p className="text-sm font-normal hover:underline pt-2"><a href="/">Education Rate</a></p>
          <p className="border-b-2 py-1"></p>
          <ul className="pt-4 text-sm font-normal">
            <li className="py-2 hover:underline"><a href="/">Mobile Application</a></li>
            <li className="py-2 hover:underline"><a href="/">Replica Edition</a></li>
            <li className="py-2 hover:underline"><a href="/">International</a></li>
            <li className="py-2 hover:underline"><a href="/">Canada</a></li>
            <li className="py-2 hover:underline"><a href="/">Español</a></li>
            <li className="py-2 hover:underline"><a href="/">中文网</a></li>
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
