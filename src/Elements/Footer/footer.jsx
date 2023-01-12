import React, { useEffect } from "react";
import Logo from "../../Assets/Logo.svg";
import Users from "../../Assets/users.svg";
import Envelope from "../../Assets/envelope.svg";
import Phone from "../../Assets/phone.svg";
import Twitter from "../../Assets/twitter.svg";
import Instagram from "../../Assets/instagram.svg";
import Linkedin from "../../Assets/linkedin.svg"
import Github from "../../Assets/github.svg"
import Discord from "../../Assets/discord.svg"
// import Discord1 from "../../Assets/discord1.svg"

export default function Footer() {

    function handleChange1() {
        window.location.href='https://developers.google.com/';
    }
    function handleChange2() {
        window.location.href='http://iiitsurat.ac.in/';
    }
    function handleChange3(){
        window.location.href='https://gdsc.community.dev/indian-institute-of-information-technology-surat/';
    }
    function handleChange4() {
        window.location.href='mailto:gdsc@iiitsurat.ac.in';
    }
    function handleChange5() {
        window.location.href='https://twitter.com/dsc_iiitsurat';
    }
    function handleChange6() {
        window.location.href='https://www.instagram.com/gdsc_iiitsurat/';
    }
    function handleChange7() {
        window.location.href='https://www.linkedin.com/company/dsc-iiitsurat/';
    }
    function handleChange8() {
        window.location.href='https://github.com/DSC-IIIT-Surat';
    }
    function handleChange9() {
        window.location.href='';
    }
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <img src={Logo} className="devheat_image" alt="not found"/>
            </div>
            <div className="footer-col">
              <h4>More Links</h4>
              <ul className="links">
                <li onClick={handleChange1} id="links-1" >Google Developers</li>
                <li onClick={handleChange2} id="links-2" >IIIT Surat</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="links">
                <li>
                  <img src={Users} className="awesomefnt" alt="not found" />
                  <span onClick={handleChange3} id="links-3">Community Page</span>
                </li>
                <li>
                  <img src={Envelope}  className="awesomefnt" alt="not found" />
                  <span style={{textTransform: "lowercase"}} onClick={handleChange4} id="links-4">
                    gdsc@iiitsurat.ac.in
                  </span>
                </li>
                <li>
                  <img src={Phone} alt="not found"  className="awesomefnt" id="links-5"/> Person - Number
                </li>
                <li>
                 <img src={Phone} alt="not found" className="awesomefnt" id="links-6"/> Person - Number
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <div>
                <img src={Twitter} alt="not found" className="awesomefnt" />
                    <span className="links" onClick={handleChange5} id="links-7"> Twitter</span>
                </div>
                <div>
                <img src={Instagram} className="awesomefnt" alt="not found"/>
                <span className="links"  onClick={handleChange6} id="links-8"> Instagram</span>
                </div>
                <div>
                    <img src={Linkedin} className="awesomefnt" alt="not found" />
                    <span className="links" onClick={handleChange7} id="links-9"> LinkedIn</span>
                </div>
                <div>
                    <img src={Github} className="awesomefnt" alt="not found" />
                    <span className="links" onClick={handleChange8} id="links-10"> GitHub</span>
                </div>
                <div>
                    <img src={Discord} className="awesomefnt" alt="not found" />
                    <span className="links" onClick={handleChange9} id="links-11"> Discord</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
