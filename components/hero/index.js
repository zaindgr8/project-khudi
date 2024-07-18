import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero4 from '/public/images/shape/shape.png'
import Image from "next/image";



const Hero = () => {

    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
      <section className="hero-slider hero-style-1">
        <Slider {...settings}>
          <div className="slide">
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${"/images/slider/cvr1.svg"})`,
              }}
            >
              <div className="container">
                <button className="border-2 p-1 rounded-lg text-white border-[#3AC9F3]">
                  <span>Empower Pakistan</span>
                </button>
                <div className="slide-title">
                  <h2>Its more of a Cause!</h2>
                </div>
                <div data-swiper-parallax="400" className="slide-text">
                  <p>
                    Project Khudi is the fastest-growing youth network, with
                    teams across multiple universities and organizations,
                    determined to be a beacon of light in the darkness. These
                    warriors never give up, fighting relentlessly against the
                    challenges facing our homeland. We Encourage collaborations,
                    & if you an organisation you can apply for our Partner
                    Program.
                  </p>
                </div>
                <div className="slide-btns">
                  <Link
                    target="_blank"
                    href="https://forms.gle/zGtyi9Yk4Kpr3dVe9"
                    className="theme-btn"
                  >
                    Become Partner
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <Image src={hero4} alt="" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${"/images/slider/cvr1.jpg"})`,
              }}
            >
              <div className="container">
                <button className="border-2 p-1 rounded-lg text-white border-[#3AC9F3]">
                  Become a Warrior
                </button>
                <div className="slide-title">
                  <h2>We are Growing Fast!</h2>
                </div>
                <div data-swiper-parallax="400" className="slide-text">
                  <p>
                    Our cause is so strong and influential that within two
                    years, we've spread across Rawalpindi and Islamabad like
                    wildfire. With teams in over 5 universities and more than
                    1500 warriors, we are the fastest-growing youth forum!
                  </p>
                </div>
                <div className="slide-btns">
                  <Link
                    href="https://forms.gle/9a9YoVwUiig3niH29"
                    className="theme-btn"
                  >
                    Become a Volunteer
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <Image src={hero4} alt="" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${"/images/slider/cvr1.jpg"})`,
              }}
            >
              <div className="container">
                <button className="border-2 p-1 rounded-lg text-white border-[#3AC9F3]">
                  <span>Support the Cause</span>
                </button>
                <div className="slide-title">
                  <h2>We Work on Root Cause!</h2>
                </div>
                <div data-swiper-parallax="400" className="slide-text">
                  <p>
                    Instead of providing free food, we believe in empowering
                    individuals with small-scale businesses that enable them to
                    earn with dignity and become assets to the nation. Our
                    long-term goal is to create an ecosystem that supports
                    startups and entrepreneurs as well.
                  </p>
                </div>
                <div className="slide-btns">
                  <Link
                    href={`mailto:contact@projectkhudi.org?subject=I want to contribute with Project Khudi`}
                    className="theme-btn"
                  >
                    Contribute Now
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <Image src={hero4} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
}

export default Hero;