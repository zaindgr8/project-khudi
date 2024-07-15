import React from 'react'
import Link from 'next/link'
import featuresimg from '/public/images/features/img-1.svg'
import featuresimg2 from '/public/images/features/img-2.svg'
import featuresimg3 from '/public/images/features/img-3.svg'
import featuresimg4 from '/public/images/features/img-4.svg'
import Image from 'next/image'

const Features = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return (
      <div className="features-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="features-text">
                <div className="section-title">
                  <div className="thumb-text">
                    <span>OUR VISSION</span>
                  </div>
                </div>
                <h2>Pakistan must become economically independent.</h2>
                <p>
                  Today, as warfare shifts to economic battles, Pakistan holds
                  immense potential. Despite numerous wars and political crises,
                  we have always been a resilient nation. With the right
                  direction, long-term vision, and true determination, we can
                  achieve the highest and most dignified status in the world.
                </p>
                <Link
                  href={`mailto:contact@projectkhudi.org`}
                  className="theme-btn"
                >
                  Learn More
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-wrap">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="features-item">
                      <div className="features-icon">
                        <Image draggable="false" src={featuresimg} alt="" />
                      </div>
                      <div className="features-content">
                        <h2>
                          <Link
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            FREE Small Scale Businesses
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="features-item">
                      <div className="features-icon">
                        <Image draggable="false" src={featuresimg2} alt="" />
                      </div>
                      <div className="features-content">
                        <h2>
                          <Link
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            Youth Skill Program- Unleash in Global Markets
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="features-item active">
                      <div className="features-icon">
                        <Image draggable="false" src={featuresimg3} alt="" />
                      </div>
                      <div className="features-content">
                        <h2>
                          <Link
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            Promote Entrepreneurs & Startups
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="features-item">
                      <div className="features-icon">
                        <Image draggable="false" src={featuresimg4} alt="" />
                      </div>
                      <div className="features-content">
                        <h2>
                          <Link
                            onClick={ClickHandler}
                            href="/cause-single/Financial-Help-for-Poor-Families"
                          >
                            Build An Eco-System That will Re-Form Pakistan
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
      </div>
    );
}

export default Features;