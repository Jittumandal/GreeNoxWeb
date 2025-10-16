import Slider from "../components/Slider.jsx";
import Tabs from "../components/tabs.jsx";
import Freshmealplans from "../components/Freshmealplans.jsx";
import Location from "../components/Location.jsx";
import Herosection from "../components/Herosection.jsx";

const Home = () => {
  return (
    <>
      <Herosection />
      {/* <Slider /> */}
      <Tabs />
      <Freshmealplans />
      <Location />
    </>
  );
};

export default Home;
