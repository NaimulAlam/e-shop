import React from "react";
import HeroMain from "./HeroMain";
import Featured from "./Featured";
import BannerA from "./BannerA";
import CollectionMain from "./CollectionMain";
import BannerB from "./BannerB";

function Home() {
  return (
    <div>
      <HeroMain></HeroMain>
      <Featured></Featured>
      <BannerA></BannerA>
      <CollectionMain></CollectionMain>
      <BannerB></BannerB>
    </div>
  );
}

export default Home;
