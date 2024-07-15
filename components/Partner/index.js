import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from '/public/images/partners/1.svg'
import partner2 from '/public/images/partners/2.svg'
import partner3 from '/public/images/partners/3.svg'
import partner4 from '/public/images/partners/4.svg'
import partner5 from '/public/images/partners/5.svg'
import partner6 from "/public/images/partners/6.svg";
import partner7 from "/public/images/partners/7.svg";
import Image from "next/image";


const Partner = () => {

  var settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="row   py-4">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <button className="border-2 p-1 border-[#38C8F2] font-bold">
              <span>Collaborations & Network</span>
            </button>
            <h2 className="">
              Our Esteemed Partners and Collaborative Network.
            </h2>
          </div>
        </div>
      </div>

      <section className="partners-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="partner-grids partners-slider space-x-3">
                <Slider {...settings}>
                  <div className="grid px-2">
                    <Image src={partner1} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner2} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner3} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner4} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner5} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner1} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner2} alt="" />
                  </div>
                  <div className="grid">
                    <Image src={partner3} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner4} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner5} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner6} alt="" />
                  </div>
                  <div className="grid px-2">
                    <Image src={partner7} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partner;