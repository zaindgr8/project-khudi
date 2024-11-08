import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
import Image from 'next/image'

const TeamSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <div className={`volunteer-area section-padding ${props.addclass}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-title section-title2 text-center">
                <div className="thumb-text">
                  <span>Volunteer</span>
                </div>
                <h2>Our Great Warriors</h2>
                <p>
                  Our vision is consistently upheld by our warriors, who have
                  served as beacons of light both on the ground and online,
                  spreading our cause. They are called warriors for a reason!
                </p>
              </div>
            </div>
          </div>

          <div className="volunteer-wrap">
            <div className="row">
              {Team.map((team, aitem) => (
                <div
                  className="col col-lg-3 col-md-6 custom-grid col-12"
                  key={aitem}
                >
                  <div className="volunteer-item">
                    <div className="volunteer-img">
                      <Image src={team.tImg} alt="" />
                    </div>
                    <div className="volunteer-content">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/team-single/[slug]"
                          as={`/team-single/${team.slug}`}
                        >
                          {team.name}
                        </Link>
                      </h2>
                      <span>{team.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-title section-title2 text-center">
                <Link href="/volunteer" className="theme-btn">
                  More Members
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TeamSection;