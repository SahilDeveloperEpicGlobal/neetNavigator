/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Grid } from "@mui/material";
import React from "react";
import { Email, Instagram, WhatsApp } from "@mui/icons-material";

function Footer() {
  return (
    <>
      <Grid itemxs={12} className="footer">
        <div className="container">
          <div className="mainfooter">
            <div className="footer1">
              <img src="/image/blue-logo-final 1.png" />
              <p>
                NEET NAVIGATOR started in 2019 with advisory and training
                services to institutional clients and in 2021 NEET NAVIGATOR
                launched the personalized counselling services for
                students/parents.{" "}
              </p>
              <h2>Address</h2>
              <p>G-22/30, GF, Sector 7, Rohini, Delhi – 110085</p>
              <h2>Connect with us</h2>
              <ul>
                <li className="emailicon">
                  <Link href={"#"}>
                    <a>
                      <Email />
                    </a>
                  </Link>
                </li>
                <li className="whatsappicon">
                  <Link href={"#"}>
                    <a>
                      <WhatsApp />
                    </a>
                  </Link>
                </li>
                <li className="facebookicon">
                  <Link href={"#"}>
                    <a>
                      <FacebookIcon />
                    </a>
                  </Link>
                </li>
                <li className="linkednicon">
                  <Link href={"#"}>
                    <a>
                      <LinkedIn />
                    </a>
                  </Link>
                </li>
                <li className="instaicon">
                  <Link href={"#"}>
                    <a>
                      <Instagram />
                    </a>
                  </Link>
                </li>
                <li className="twittericon">
                  <Link href={"#"}>
                    <a>
                      <TwitterIcon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer2">
              <h2>Important leads</h2>
              <ul>
                <li>
                  <Link href={"#"}>
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>College predictor</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>About Medical colleges</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Medical Admission Counselling</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Success Stories</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer3">
              <h2>Our Services</h2>
              <ul>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a>Service1</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Grid>
      <Grid itemxs={12} className="lastfooter">
        <div className="container">
          <h3>© Copyright - NEET Navigator Educational Services </h3>
        </div>
      </Grid>
    </>
  );
}

export default Footer;
