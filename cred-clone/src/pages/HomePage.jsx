import BrandsLove from "../components/BrandsLove/BrandsLove";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import HeroSection from "../components/HeroSection/HeroSection";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import ProductShowCase from "../components/ProductShowCase/ProductShowCase";
import WindowPeek from "../components/WindowPeek/WindowPeek";
import Header from "../components/common/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <WindowPeek />
      <CredSecurity />
      <CredStory />
    </>
  );
};

export default HomePage;
