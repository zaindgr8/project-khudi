import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/3.svg'
import abimg2 from '/public/images/about/1.png'
import abimg3 from '/public/images/about/2.png'
import abimg4 from '/public/images/shape/shape2.png'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return (
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12  grid col-12">
              <div className="about-cercle">
                <div className="about-img">
                  <Image src={abimg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 grid  col-md-12 col-12">
              <div className="about-text">
                <div className="section-title">
                  <div className="thumb-text">
                    <span>ABOUT US</span>
                  </div>
                  <h2>
                    PROJECT KHUDI <span>a Cause</span> to{" "}
                    <span>Re-Dignify</span> Pakistan!
                  </h2>
                </div>
                <p>
                  Pakistan holds immense potential with its youthful population,
                  diverse climate, strategic location, and abundant resources
                  yet struggles. Project Khudi aims to empower Pakistan by
                  addressing root causes, starting with providing free
                  small-scale businesses. We believe that individuals should not
                  be given free food but rather taught skills and provided
                  opportunities to earn their own livelihood.
                </p>
                <div className="ab-icon-area">
                  <div className="about-icon-wrap">
                    <div className="about-icon-item">
                      <div className="ab-icon">
                        <Image draggable="false" src={abimg2} alt="" />
                      </div>
                      <div className="ab-text ">
                        <h2>
                          <Link
                            className="mr-9"
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            Its A Cause
                          </Link>
                        </h2>
                      </div>
                    </div>
                    <div className="about-icon-item">
                      <div className="ab-icon ab-icon2">
                        <Image draggable="false" src={abimg3} alt="" />
                      </div>
                      <div className="ab-text">
                        <h2>
                          <Link
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            We Are Warriors
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-shape">
          <Image src={abimg4} alt="" />
        </div>
      </div>
    );
}

export default About;