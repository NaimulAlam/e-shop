import React from "react";
import Slider from "react-slick";

const BrandSlide = () => {
  const Brands = [
    {
      _id: 1,
      name: "Nike",
      img: "img",
    },
    {
      _id: 2,
      name: "Champion",
      img: "img",
    },
    {
      _id: 3,
      name: "Calvin Kelin",
      img: "img",
    },
    {
      _id: 4,
      name: "Zara",
      img: "img",
    },
    {
      _id: 5,
      name: "Crocodile",
      img: "img",
    },
    {
      _id: 6,
      name: "Jordan",
      img: "img",
    },
  ];
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div>
        <div>
          <h4>Products From Trasted Brands</h4>
        </div>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
      <div className="p-10">
        <Slider {...settings}>
          {Brands.map((Brand) => (
            <div key={Brand._id}>
              <h2>{Brand.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandSlide;
