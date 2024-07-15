import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '/public/images/testimonials/img-1.svg'
import test2 from '/public/images/testimonials/img-2.svg'
import test3 from '/public/images/testimonials/img-3.png'
import test4 from '/public/images/ts.png'
import Image from 'next/image';



const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
      <>
        <div className="row bg-[#091A3B] text-white py-4">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <button className="border-2 p-1 border-[#38C8F2] font-bold">
                <span>Board of Directors</span>
              </button>
              <h2 className='text-white'>Message From Founders & Board Of Directors.</h2>
            </div>
          </div>
        </div>
        
        <section className="testimonials-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <div className="testimonials-slider">
                  <div className="testimonial-thumb-active">
                    <Slider
                      asNavFor={nav2}
                      ref={(slider2) => setNav2(slider2)}
                      fade={true}
                    >
                      <div className="test-img">
                        <Image src={test1} alt="" />
                      </div>
                      <div className="test-img">
                        <Image src={test2} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className="testimonial-content-active text-center">
                    <Slider
                      asNavFor={nav1}
                      ref={(slider2) => setNav2(slider2)}
                      slidesToShow={1}
                      fade={true}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      arrows={false}
                    >
                      <div className="grid">
                        {/* <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul> */}
                        <p>
                          "Pakistan is my motherland, and I will never give up
                          on her, even in the darkest times. I envision my
                          country and nation holding a dignified state on every
                          platform & the world must know that we are the
                          "CHOOSERS". I seek individuals who share this fire and
                          warrior spirit to join me in embracing this challenge.
                          Together, we will start by reforming our economy at
                          the individual level, leading towards building a
                          robust ecosystem."
                        </p>
                        <div className="info">
                          <h5>Zain Ul Abideen Baloch</h5>
                          <p>Founder</p>
                        </div>
                      </div>
                      <div className="grid">
                        {/* <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul> */}
                        <p>
                          "We have a vision of expanding Project Khudi from the
                          twin cities to every major and rural city. Witnessing
                          rapid growth, our mission will continue until our
                          motherland stands back on its feet. Project Khudi is a
                          cause, not just an ordinary NGO. We always welcome
                          collaborations and volunteers to join us in this
                          journey."
                        </p>
                        <div className="info">
                          <h5>Mohammad Noor Khan</h5>
                          <p>Co-Founder</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testi-shape">
            <Image src={test3} alt="" />
          </div>
          <div className="testi-shape2">
            <Image src={test4} alt="" />
          </div>
        </section>
      </>
    );
}

export default Testimonial;