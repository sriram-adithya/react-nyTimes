import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import MainPage from "./components/MainPage/MainPage";
import MainPage2 from "./components/MainPage2/MainPage2";

const App = () => {
  return (
    <div className="h-auto w-full">
      <Navbar />
      <Section />
      <MainPage />
      <MainPage2 />
      <Footer />
    </div>
  );
};

export default App;
