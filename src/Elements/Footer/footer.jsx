import React from "react";
import Logo from "../../Assets/Logo.svg";
import Users from "../../Assets/users.svg";
import Envelope from "../../Assets/envelope.svg";
import Phone from "../../Assets/phone.svg";
import Twitter from "../../Assets/twitter.svg";
import Instagram from "../../Assets/instagram.svg";
import Linkedin from "../../Assets/linkedin.svg"
import Github from "../../Assets/github.svg"
import Discord from "../../Assets/discord.svg"
import Discord1 from "../../Assets/discord1.svg"

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <img src={Logo} className="devheat_image" />
            </div>
            <div className="footer-col">
              <h4>More Links</h4>
              <ul className="links">
                <li>Google Developers</li>
                <li>IIIT Surat</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="links">
                <li>
                  <img src={Users} className="awesomefnt" alt="" />
                  <span>Community Page</span>
                </li>
                <li>
                  <img src={Envelope}  className="awesomefnt" alt="" />
                  <span style={{textTransform: "lowercase"}}>
                    gdsc@iiitsurat.ac.in
                  </span>
                </li>
                <li>
                  <img src={Phone} alt=""  className="awesomefnt" /> Person - Number
                </li>
                <li>
                 <img src={Phone} alt="" className="awesomefnt" /> Person - Number
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <div>
                <img src={Twitter} alt="" className="awesomefnt"/>
                    <span className="links"> Twitter</span>
                </div>
                <div>
                <img src={Instagram} className="awesomefnt" alt="" />
                <span className="links"> Instagram</span>
                </div>
                <div>
                    <img src={Linkedin} className="awesomefnt" alt="" />
                    <span className="links"> LinkedIn</span>
                </div>
                <div>
                    <img src={Github} className="awesomefnt" alt="" />
                    <span className="links"> GitHub</span>
                </div>
                <div>
                    <img src={Discord} className="awesomefnt" alt="" />
                    <span className="links"> Discord</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
