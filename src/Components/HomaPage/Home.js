import React from "react";
import Navbar from "../../Shared/Navbar";
import HeroMain from "./HeroMain";
import Featured from "./Featured";
import Footer from "../../Shared/Footer";
import BannerA from "./BannerA";
import CollectionMain from "./CollectionMain";
import BannerB from "./BannerB";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroMain></HeroMain>
      <Featured></Featured>
      <BannerA></BannerA>
      <CollectionMain></CollectionMain>
      <BannerB></BannerB>
      <Footer></Footer>
    </div>
  );
}

export default Home;
