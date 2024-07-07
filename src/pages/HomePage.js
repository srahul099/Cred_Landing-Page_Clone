import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import "./Homepage..css";
import CredExperience from "../components/CredExperience";
import BrandLove from "../components/BrandsLove";
import CredSecurity from "../components/CredSecutrity";
import WindowPeek from "../components/WindowPeek";
import MobileScroll from "../components/MobileScroll";
import CredStory from "../components/CredStory";
import AppRating from "../components/AppRating";
import Footer from "../components/common/footer";
const HomePage = () => {
  return (
    <>
      <p className="caution">
        This is just a clone made for educational purposes this is not the
        actual website in any way
      </p>
      <div className="headerandhero">
        <Header />
        <HeroSection />
      </div>
      <ProductShowCase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>

      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
