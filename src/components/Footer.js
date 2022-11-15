import React from "react";
import logo from "../images/cinvocLogoBottom.svg";
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <img
                src={logo}
                width="200"
                alt="logo"
                height="200"
                style={{ marginTop: "-34px" }}
              />
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Services">Services</a>
                </li>
                <li>
                  <a href="Portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="About">Blog</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Talk</h4>
              <ul>
                <li>
                  <a href="#">+92(323)4474387</a>
                </li>
                <li>
                  <a href="#">hr@cinvoc.com</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow Cinvoc</h4>
              <div class="social-links">
                <a href="#">
                  {" "}
                  <img
                    src={fb}
                    width={"35"}
                    height={"35"}
                    alt="facebook"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={instagram}
                    width={"35"}
                    height={"35"}
                    alt="instagram"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={twitter}
                    width={"35"}
                    height={"35"}
                    alt="twitter"
                  />{" "}
                </a>
              </div>
            </div>

          </div>
        </div>
        {/* horizontal line */}
        <div class="row mt-5">
          <div class="col copyright">
            <p class="">
              <small class="text-white-50"></small>
            </p>
          </div>
        </div>

        {/* copyright */}
        <div class="row mt-5"></div>
        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center ">
                <p>copyright 2022 cinvoc. all rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
