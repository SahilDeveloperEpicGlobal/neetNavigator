/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Grid } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Grid item xs={12} className="mainheader">
      <Link href={"#"}>
        <a>
          <img src="/image/blue-logo-final 1.png" />
        </a>
      </Link>
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
    </Grid>
  );
}

export default Header;
