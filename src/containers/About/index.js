/**
 *
 * About
 *
 */

import React from 'react';

import H1 from '../../components/H1';
import Img from '../../components/Img';
import classes from './index.module.css';
import Footer from '../../components/Footer';

import img from '../../assets/img/About_us_image.png';
import imageHK from '../../assets/img/image1_aboutUs.jpg';
import imageHuaLiang from '../../assets/img/logo_2.png';
// import fb from '../../assets/img/icon_fb.png';
// import twitter from '../../assets/img/icon_twitter.png';
// import slack from '../../assets/img/icon_slack.png';

function About() {
  // const functionalities = [
  //   'List of products',
  //   'Filters',
  //   'Comments',
  //   'Votes',
  //   'Comments',
  //   'Static Page',
  //   'Image Management',
  // ];

  // const networks = {
  //   facebook: {
  //     img: fb,
  //     href: 'https://www.facebook.com/strapijs',
  //   },
  //   twitter: {
  //     img: twitter,
  //     href: 'https://twitter.com/strapijs?lang=en',
  //   },
  //   slack: {
  //     img: slack,
  //     href: 'https://slack.strapi.io',
  //   },
  // };

  return (
    <div>
      <div className="page-wrapper" id="about-page">
        <div className="cover-wrapper">
          <Img src={img} alt="cover" />
        </div>
        <div className={classes.informationWrapper}>
          <div className="container">
            <H1 className={classes.subHeader1_Red}>About Us</H1>

            <div className="container">
              <div className={classes.eachPart}>
                <div className="row">
                  <div className="col col-lg-4">
                    <img
                      id={classes.imageHolder}
                      src={imageHuaLiang}
                      alt="Hua Liang logo"
                    />
                    <img
                      // style="width: 100%"
                      id={classes.imageHolder}
                      src={imageHK}
                      alt="HK"
                    />
                  </div>
                  <div className="col">
                    <div className="text-section">
                      <br />
                      <div className={classes.text}>
                        Hua Liang Financial Holding Limited (‘Hua Liang
                        Financial’), established in October 2018, is a full
                        licensed financial service provider regulated under SFC
                        in Hong Kong. Our business scope covering: brokerage,
                        trading, investment consulting, investment banking and
                        asset management. Meanwhile, a letter of support has
                        been granted from Bureau of Financial Affairs of Foshan
                        Shunde City (‘Bureau of Financial Affairs’) and set up
                        Hua Liang Investment Management (Foshan) Limited in
                        China. Moreover, we provide property planning and
                        development service in both Hong Kong and China by our
                        real estate team. We aim to expand our business to
                        Greater Bay Area.
                      </div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          {' '}
                          Hua Liang Financial provides unique one-stop financial
                          and real estate services to our customers and
                          partners.
                        </li>
                        <li className="list-group-item">
                          {' '}
                          Our core principles ‘Integrity and ‘Mutual Benefits’
                          enable our business to deliver continued success and
                          sustainable returns to our valued customers.
                        </li>
                        <li className="list-group-item">
                          {' '}
                          We aim to create a differentiating client experience
                          by grasping of business opportunities, realizing value
                          and leveraging our business capabilities.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.eachPart}>
                <div className={classes.subHeaderContainer}>
                  <div className={classes.subHeader1}>Our Business</div>

                  <div className={classes.subHeader2_white}>
                    Financial Services
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Brokerage Service
                        </h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Securities and futures trading
                          </li>
                          <li className="list-group-item">
                            Trading bonds and its derivatives for clients
                          </li>
                          <li className="list-group-item">
                            Mutual funds and unit trusts trading
                          </li>
                          <li className="list-group-item">
                            Advising on securities and futures contracts
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Investment Banking
                        </h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Corporate finance</li>
                          <li className="list-group-item">
                            Underwriting, placing and distribution
                          </li>
                          <li className="list-group-item">
                            Investor introduction
                          </li>
                          <li className="list-group-item">
                            Merger & Acquisition and financial advisory
                          </li>
                          <li className="list-group-item">
                            Advisory on listing
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Asset Management
                        </h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Fund management, special asset management, private
                            equity fund and investment advisory
                          </li>
                          <li className="list-group-item">Absolute return</li>
                          <li className="list-group-item">
                            Seek substantial value and risk control
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Customer Financing
                        </h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Project financing</li>
                          <li className="list-group-item">Mortgage</li>
                          <li className="list-group-item">
                            Personal / SME loan
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.eachPart}>
              <div className={classes.subHeaderContainer}>
                <div className={classes.subHeader1}>Our Team</div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className={classes.subHeader2_red}>
                      Alexander Chan - CFO
                    </div>
                  </div>
                  <div className="col">
                    {' '}
                    <div className={classes.text}>
                      Mr. Chan is a certified public accountant of the HKICAP
                      and ACCA. He worked for a well-known asset management
                      company in China. Taking a leading role on industrial M&A
                      funds and fundraising activities. Focus on industries
                      including energy, medical care, education etc. He was the
                      financial controller in one of the top 500 Chinese Hong
                      Kong-listed company. He has extensive large-scale
                      investment and financing M&A experience. Participated in
                      more than US$5 billion of stock, debt, hybrid securities
                      and mergers and acquisitions transactions. He helped to
                      develop strategies and execute strategic acquisitions of
                      overseas energy companies, with over 20 years industry
                      experience. Familiar with the HK capital market and the
                      operation of listed companies. Mr. Chan holds the
                      University of Southampton Bachelor degree in accounting
                      and finance in the United Kingdom. He is the Responsible
                      Officer under SFC for license type 6.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
