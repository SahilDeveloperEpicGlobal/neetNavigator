/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// eslint-disable-next-line no-unused-vars
import { FormControl, InputLabel, Link, MenuItem, Select, TextField } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
function App() {
  return (
    <>
   <div className="mainheader">
    <div className="logo">
    <img src="/image/blue-logo-final 1.png" />
    </div>
    <div className="mainmenu">
    <ul>
      <li>
        <Link href="youtube.com">
          <a className="active">Home</a>
        </Link>
      </li>
      <li>
      <Link href="youtube.com">
          <a>Overview</a>
        </Link>
        </li>
      <li> <Link href="youtube.com">
          <a>Team</a>
        </Link></li>
      <li> <Link href="youtube.com">
          <a>Services</a>
        </Link></li>
      <li><Link href="youtube.com">
          <a>Courses</a>
        </Link></li>
      <li><Link href="youtube.com">
          <a>Blogs</a>
        </Link></li>
      <li><Link href="youtube.com">
          <a>Contact</a>
        </Link></li>
     </ul>
    </div>
    <div className="socialicon">
      <ul>
      <li><TwitterIcon /></li>
      <li><InstagramIcon /></li>
      <li><FacebookIcon /></li>
      <li><YouTubeIcon /></li>
      </ul>
    </div>
   </div> 
   <div className="section2">
    <h1>650</h1>
    <h1>Number of Medical </h1>
    <h1>colleges in <strong>India</strong></h1>
   </div>
<div className="section3">
 <div className="container">
<div className="row">
<h1>Service - Free predictor</h1>
  <h2>You need to make sure that your CRS score is above the minimum points score of your <Link href="#">
    <a>round of invitations</a></Link>.</h2>
    <h3>1.Student Registration</h3>
    <FormControl fullWidth>
      <label>Student Name</label>
      <input type={"text"} placeholder={"Enter your full name"}/>
</FormControl>
</div>
 </div>
</div>
    </> 
  );
}

export default App;
