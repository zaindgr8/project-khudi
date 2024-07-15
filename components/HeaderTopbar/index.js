import React from 'react'
import Link  from 'next/link'

const HeaderTopbar = (props) => {
    return (
      <div className={`topbar ${props.tpClass}`}>
        <div className="container">
          <div className="row">
            <div className="col col-md-6 col-sm-12 col-12">
              <div className="contact-intro">
                <ul>
                  <li>
                    <i className="fi flaticon-call"></i>+92 314 5265194
                  </li>
                  <li>
                    <i className="fi flaticon-envelope"></i>{" "}
                    info@projectkhudi.com
                  </li>
                  <li>
                    <Link className="theme-btn" href="/donate">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeaderTopbar;