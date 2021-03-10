import ReactStars from "react-rating-stars-component";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlus,
} from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsBriefcase, BsPencil } from "react-icons/bs";
import { AiOutlineYahoo } from "react-icons/ai";

function Freelancerdetails() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="detailsheader">
        <div className="containerdetails">
          <div className="leftcontainer">
            <div className="freedetailsimg">
              <img src="data:image/jpeg;base64,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"></img>
            </div>
          </div>
          <div className="header-details">
            <h4>
              Janelia Fragrintio
              <span className="pull-right">$44/hr</span>
            </h4>

            <p className="fdp">Full Stack PHP Developer</p>
            <div className="flagUs">
              <ReactCountryFlag
                className="flags"
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
              />
              <ReactCountryFlag className="flagn" countryCode="UnitedKingdom" />
              <ReactStars
                className="star-rating"
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <ReactCountryFlag
                className="flags"
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
              />
              <ReactCountryFlag className="flagn" countryCode="UnitedKingdom" />
            </div>
          </div>
          <div className="right-side-details">
            <ul>
              <li>
                <span class="detail-info">Availability</span> Full Time
                <button className="availableFD">Available</button>
              </li>
              <li>
                <span class="detail-info">Location</span> Australia
              </li>
              <li>
                <span class="detail-info">Experience</span> 5 Year
              </li>
              <li>
                <span class="detail-info">Age</span>27 Year
              </li>
              <div className="icons">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="socialicons" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="socialicons" />
                </a>
                <a href="http://www.twitter.com/">
                  <FaTwitter className="socialicons" />
                </a>
                <a href="https://plus.google.com/">
                  <FaGooglePlus className="socialicons" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn className="socialicons" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <br></br>

      <div className="section">
        <div className="container">
          {/* --- sidebar container profile ---- */}
          <div class="sidebar-container">
            <div class="sidebar-box">
              <button className="sidebar-status">Available</button>
              <h4 class="flc-rate">$17/hr</h4>
              <div class="sidebar-inner-box">
                <div class="sidebar-box-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div class="sidebar-box-detail">
                  <h4>Daniel Disroyer</h4>
                  <span class="desination">App Designer</span>
                </div>
              </div>
              <div class="sidebar-box-extra">
                <ul class="skills">
                  <li>
                    <button> CSS3</button>
                  </li>
                  <li>
                    <button> Html5 </button>
                  </li>
                  <li>
                    <button> Photoshop</button>
                  </li>
                  <li>
                    <button> Wordpress</button>
                  </li>
                  <li>
                    <button> PHP </button>
                  </li>
                  <li>
                    <button> Java Script </button>
                  </li>
                </ul>
                <ul class="status-detail">
                  <li class="br-1">
                    <strong>$44/hr</strong>Hourly Rate
                  </li>
                  <li class="br-1">
                    <strong>52 Jobs</strong>Done job
                  </li>
                  <li>
                    <strong>44</strong>Rehired
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-sidebar bt-1 bg-success">
              {" "}
              Make An Offer
            </button>
          </div>
          <div className="container-detail-box">
            <div class="apply-job-header">
              <h4>Janelia Fragrintio</h4>
              <ReactCountryFlag className="flag" countryCode="UnitedKingdom" />
            </div>
            <div className="apply-job-para">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus.
              </p>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus.
              </p>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus.
              </p>
            </div>
            <div className="apply-job-para">
              <h5>Skills</h5>
              <ul class="skills">
                <li>
                  <button> CSS3</button>
                </li>
                <li>
                  <button> Html5 </button>
                </li>
                <li>
                  <button> Photoshop</button>
                </li>
                <li>
                  <button> Wordpress</button>
                </li>
                <li>
                  <button> PHP </button>
                </li>
                <li>
                  <button> Java Script </button>
                </li>
              </ul>
            </div>
            <div className="apply-job-para">
              <h5>Language</h5>
              <div className="language">
                <ReactCountryFlag
                  className="flags"
                  countryCode="US"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
                <ReactCountryFlag
                  className="flagn"
                  countryCode="UnitedKingdom"
                />
                <ReactCountryFlag
                  className="flags"
                  countryCode="US"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
                <ReactCountryFlag className="flagn" countryCode="French" />
                <ReactCountryFlag
                  className="flags"
                  countryCode="US"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
                <ReactCountryFlag className="flagn" countryCode="Hindi" />
              </div>
              <br></br>
              <br></br>
              <button className="makeoffer">MAKE AN OFFER</button>
            </div>
          </div>

          <div className="container-detail-box">
            {/* --------------------------------------- */}

            <div className="sidebar-container">
              <div className="sidebar-wrapper">
                <div className="sidebar-box-header bb-1">
                  <h4>Website & Portfolio</h4>
                </div>

                <ul className="block-list">
                  <li>
                    <FaGlobeAmericas className="fcglobe" />
                    www.mysite.com
                  </li>
                  <li>
                    <BsBriefcase className="briefcase" />
                    Portfolio
                  </li>
                  <li>
                    <BsPencil className="pencil" />
                    My Blog
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-header bb-1">
                <h4>Similar Profiles</h4>
              </div>
              <div className="member-profile-list">
                <div className="member-profile-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div className="member-profile-detail">
                  <h4>Adam Crivatinly</h4>
                  <span>Web Developer</span>
                  <span className="cl-success">Freelancer</span>
                </div>
              </div>
              <div class="member-profile-list">
                <div class="member-profile-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div class="member-profile-detail">
                  <h4>Adam Crivatinly</h4>
                  <span>Web Developer</span>
                  <span class="cl-success">Freelancer</span>
                </div>
              </div>
              <div className="member-profile-list">
                <div className="member-profile-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div className="member-profile-detail">
                  <h4>Adam Crivatinly</h4>
                  <span>Web Developer</span>
                  <span className="cl-success">Freelancer</span>
                </div>
              </div>
              {/* ------ social icons ----  */}
              <div className="sidebar-wrapper">
                <div className="sidebar-box-header bb-1">
                  <h4>Share This Job</h4>
                </div>

                <ul className="social-share">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebook className="fb-share" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.twitter.com/">
                      <FaTwitter className="tw-share" />
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/">
                      <FaGooglePlus className="gp-share" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagram className="in-share" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedinIn className="li-share" />
                    </a>
                  </li>

                  <li>
                    <a href="https://login.yahoo.com/">
                      <AiOutlineYahoo className="be-share" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <h4>Review</h4>
            </div>
            <div className="row">
              <div className="review-list">
                <div className="review-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div class="review-detail">
                  <h4>
                    Daniel Luke<span>3 days ago</span>
                  </h4>
                  <span className="re-designation">Web Developer</span>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </p>
                </div>
              </div>
              <div className="review-list">
                <div className="review-thumb">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div class="review-detail">
                  <h4>
                    Daniel Luke<span>3 days ago</span>
                  </h4>
                  <span class="re-designation">Web Developer</span>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </p>
                </div>
                <div className="review-list">
                  <div className="review-thumb">
                    <img src="data:image/jpeg;base64,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"></img>
                  </div>
                  <div class="review-detail">
                    <h4>
                      Daniel Luke<span>3 days ago</span>
                    </h4>
                    <span className="re-designation">Web Developer</span>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                    </p>
                  </div>
                  <div className="review-list">
                    <div className="review-thumb">
                      <img src="data:image/jpeg;base64,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"></img>
                    </div>
                    <div class="review-detail">
                      <h4>
                        Daniel Luke<span>3 days ago</span>
                      </h4>
                      <span className="re-designation">Web Developer</span>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freelancerdetails;
