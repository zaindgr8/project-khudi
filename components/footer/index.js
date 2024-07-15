import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/logo/logo.png'
import n1 from '/public/images/instragram/1.svg'
import n2 from '/public/images/instragram/2.svg'
import n3 from '/public/images/instragram/3.svg'
import n4 from "/public/images/instragram/4.svg";
import n5 from "/public/images/instragram/5.svg";
import n6 from "/public/images/instragram/6.svg";
import Image from 'next/image'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="footer-logo widget-title">
                  <Link onClick={ClickHandler} href="/">
                    <Image src={Logo} alt="logo" />
                    {/* Khai<span>rah.</span> */}
                  </Link>
                </div>
                <p>
                  Project Khudi began in 2022 with a vision to re-dignify
                  Pakistan by addressing root causes.
                </p>
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      onClick={ClickHandler}
                      href="https://www.facebook.com/projectkhudi"
                    >
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      target="_blank"
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      target="_blank"
                      href="https://www.linkedin.com/company/project-khudi/?originalSubdomain=pk"
                    >
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Let's Join Hands</h3>
                </div>
                <ul>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href={`mailto:contact@projectkhudi.org?subject=I want to contribute with Project Khudi`}
                    >
                       Contribute
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/causes">
                      Join As Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      target="_blank"
                      href="https://forms.gle/zGtyi9Yk4Kpr3dVe9"
                    >
                      Become Partner
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-6 col-sm-12 col-12">
              <div className="widget market-widget tp-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin"></i>
                      FURC, Lalazar, Rawalpindi
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>+92 314 5265194
                    </li>
                    <li>
                      <i className="fi flaticon-envelope"></i>
                      contact@projectkhudi.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>Instagram</h3>
                </div>
                <ul className="d-flex">
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <Image src={n1} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <Image src={n2} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <Image src={n3} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <Image src={n4} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <Image src={n5} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="https://www.instagram.com/projectkhudi/"
                    >
                      <Image src={n6} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                &copy; 2024 Project Khudi. All rights reserved. Made by{" "}
                <a
                  href="https://devmatesolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEVMATE SOLUTIONS
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 

export default Footer;