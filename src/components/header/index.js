import { Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import React from "react";

function Header() {
  return (
    <div className="mainheader">
      <div className="logo">
        <img src="/image/blue-logo-final 1.png" />
      </div>
      <div className="mainmenu">
        <ul>
          <li>
            <Link href={"#"}>
              <a className="active">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Overview</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>
              <a>Team</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="socialicon">
        <ul>
          <li>
            <Link href={"#"}>
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>
                <FacebookIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>
                <YouTubeIcon />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
