import About from "./components/About";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SocialMedias from "./components/SocialMedias";

const App = () => {
  return (
    <>
      <Navbar />
      <SocialMedias />
      <Banner />
      <About />
      <Background />
    </>
  );
};

export default App;
