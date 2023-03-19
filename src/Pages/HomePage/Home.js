import React from "react";
import HeroMain from "./HeroMain";
import Featured from "./Featured";
import BannerA from "./BannerA";
import CollectionMain from "./CollectionMain";
import BannerB from "./BannerB";
import BrandSlide from "./BrandSlide";

function Home() {
  return (
    <div>
      <HeroMain></HeroMain>
      <Featured></Featured>
      <BannerA></BannerA>
      <CollectionMain></CollectionMain>
      <BannerB></BannerB>
      <BrandSlide></BrandSlide>
    </div>
  );
}

export default Home;
