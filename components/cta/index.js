import React from 'react'

const CtaSection = (props) => {

    return (
      <div className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="cta-left">
                <h2>
                  We believe that instead of buying free food, we should buy
                  opportunities for individuals & teach them how to earn their food instead
                  with dignity.
                </h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
              <div className="cta-wrap">
                <div className="cta-call mr-5">
                  <span>Call Us!</span>
                  <h3>+923145265194</h3>
                </div>
                <div className="cta-call">
                  <span>E-mail Us!</span>
                  <h3>contact@projectkhudi.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CtaSection;