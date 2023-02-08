/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from "@mui/material";
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
      <li><Link href={"#"}><a><TwitterIcon /></a></Link></li>
      <li><Link href={"#"}><a><InstagramIcon /></a></Link></li>
      <li><Link href={"#"}><a><FacebookIcon /></a></Link></li>
      <li><Link href={"#"}><a><YouTubeIcon /></a></Link></li>
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
    <form>
      <label>Student Name</label>
      <input type={"text"} placeholder={"Enter your full name"}/>
      <label>Select your Gender</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Enter your Mobile Number</label>
      <input type={"Number"} placeholder={"10 Digit number"}/>
      <label>Verify mobile number</label>
      <p>A 6 digit code has been sent to:<br></br>
<strong>95987654678</strong></p>
<label className="emailinput">Enter your Email Address</label>
      <input type={"Email"} />
      <label >Enter the verification code here</label>
      <input type={"code"} />
      <p><Link href={"#"}><a>Didn't get the code?</a></Link> </p>
      <ul>
        <li><Link href={"#"}><a>Resend on SMS</a></Link></li>
        <li><Link href={"#"}><a>Resend on call</a></Link></li>
      </ul>
      <h3>2.Enter your Domicile</h3>
      <label>[Senior Secondary] 12th Passing State</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>[High School] 10th Passing State</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Permanent Address Postal Code</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label >State</label>
      <input type={"code"} />
      <label >City</label>
      <input type={"code"} />
      <label >City</label>
      <input type={"code"} />
      <h3>3.Enter your Category</h3>
      <label>Whether Physically handicapped Candidate?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Whether Belongs to Armed Force?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Whether Orphan or Not?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Whether Single Child or Not?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Whether belongs to minority?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<label>Whether eligible for Quota?</label>
<select name="" id="students">
  <option value="volvo">Select</option>
  <option value="saab">1</option>
  <option value="mercedes">2</option>
  <option value="audi">3</option>
</select>
<h3 className="lastinput">4.Enter your Marks</h3>
<input type={"code"} />
<p className="markpara">Your estimated rank between 1 lakh to 1,50 lakh</p>
<input type={"submit"} value={"Calculate your score"}></input>
</form>
</div>
 </div>
</div>
<div className="section4">
 <div className="container">
 <p>A college availability graph can be used to measure the availability of college courses for a given semester. This graph can be used to show the availability of courses offered by a particular college or university, as well as the availability of courses in a specific subject area.</p>
 <h2>Data Analysis's of NEET Predictor </h2>
 <div className="neetable">
  <ul>
    <li className="heading">Time/Date</li>
    <li>24-01-2022 [14:08]  </li>
    <li>24-01-2022 [14:08]  </li>
    <li>24-01-2022 [14:08]  </li>
    <li>24-01-2022 [14:08]  </li>
    <li>24-01-2022 [14:08]  </li>
    <li>24-01-2022 [14:08]  </li>
  </ul>
  <ul>
    <li className="heading">No. of College</li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
  </ul>
  <ul>
    <li className="heading">College Type</li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
    <li>4 College  </li>
  </ul>
  <ul>
    <li className="heading">State</li>
    <li>IN/Punjab</li>
    <li>IN/Haryana  </li>
    <li>IN/Bangalore</li>
    <li>IN/Punjab</li>
    <li>IN/Haryana</li>
    <li>IN/Bangalore</li>
  </ul>
 </div>
 <p><strong>NOTE: </strong>The contents of a college admission list will vary depending on the college and the type of admissions process. Generally, a college admission list will include information about each student who has been accepted to the college, such as their name, address, contact information, test scores, and other admissions criteria that were used to make the decision. Depending on the college, the list may also include the student's major, any scholarships or financial aid that have been awarded, and any special programs or services that the student has been accepted into</p>
 </div>
</div>
<div className="section5">
<div className="container">
<h2>College List</h2>
<table>
  <tr>
    <th>State</th>
    <th>No. of College</th>
    <th className="countrynest3">Select the Colleges
    <table className="countrynest2">
      <tr>
        <th>
          <input type={"checkbox"} />
        </th>
        <th>Gov.</th>
        <th>Pvt.</th>
        <th>Dem.</th>
      </tr>
    </table>
    </th>
  </tr>
  <tr>
    <td>Punjab</td>
    <td>30 College</td>
    <td>
    <table>
    <tr>
    <td className="countrynest">   <input type={"checkbox"} /></td>
    <td className="countrynest">34</td>
        <td className="countrynest">56</td>
        <td className="countrynest">23</td>
      </tr>
    </table>
      </td>
  </tr>
  <tr>
    <td>Bangalore</td>
    <td>78 College</td>
    <td>
    <table>
    <tr>
    <td className="countrynest">   <input type={"checkbox"} /></td>
    <td className="countrynest">34</td>
        <td className="countrynest">56</td>
        <td className="countrynest">23</td>
      </tr>
    </table>
      </td>
  </tr>
  <tr>
    <td>Bhopal</td>
    <td>45 College</td>
    <td>
    <table>
    <tr>
    <td className="countrynest">   <input type={"checkbox"} /></td>
    <td className="countrynest">34</td>
        <td className="countrynest">56</td>
        <td className="countrynest">23</td>
      </tr>
    </table>
      </td>
  </tr>
  <tr>
    <td>Haryana</td>
    <td>19 College</td>
    <td>
    <table className="countrynest1">
    <tr>
        <td className="countrynest">   <input type={"checkbox"} /></td>
        <td className="countrynest">34</td>
        <td className="countrynest">56</td>
        <td className="countrynest">23</td>
      </tr>
    </table>
      </td>
  </tr>
</table>
</div>
</div>
<div className="section6">
<div className="container">
  <div className="maincart">
  <div className="cartsummary">
    <h3>Cart Summary</h3>
<ul>
  <li> <input type={"radio"} />
  All states </li><li>₹499</li>
</ul>
<ul>
  <li> <input type={"radio"} />
  1 state</li>
 <li>₹199</li>
</ul>
<ul>
  <li> <input type={"radio"} />
  2 state</li>
 <li>₹299</li>
</ul>
<ul>
  <li> <input type={"radio"} />
  2 marks</li>
 <li>₹699</li>
</ul>
<ul>
  <li> <input type={"radio"} />
  4 marks</li>
 <li>₹899</li>
</ul>
<ul>
  <li className="subtotal">
  SUBTOTAL</li>
 <li className="subtotal1">₹499</li>
</ul>
<button>Checkout</button>
  </div>
  <div className="summarycontent">
    <p>In order to find out which colleges accept applicants with good credit scores, you should contact each school directly to inquire about their admissions policies and what kind of credit score they look for. Additionally, you can look for colleges that are known for being “credit friendly,” which means that they don’t require a credit check as part of their admissions process. Finally, you can research scholarship and grant programs that are specifically designed for students with good credit scores.</p>
  </div>
  <div className="summarygraph">
  <ul>
    <li><div class="progress">
  <div class="progress_inner"></div>
</div></li>
    <li>
    <div class="progress">
  <div class="progress_inner"></div>
</div>
    </li>
    <li>
    <div class="progress">
  <div class="progress_inner"></div>
</div>
    </li>
  </ul>
  <div className="collegelocator">
    <ul>
      <li><span>0</span>Government Colleges</li>
      <li><span>0</span>Private College</li>
      <li><span>0</span>Deemed Colleges</li>
      
    </ul>
  </div>
  </div>
  </div>
</div>
</div>

<div className="footer">
  <div className="container">
    <div className="mainfooter">
      <div className="footer1">
      <img src="/image/blue-logo-final 1.png" />
      <p>NEET NAVIGATOR started in 2019 with advisory and training services to institutional clients and in 2021 NEET NAVIGATOR launched the personalized counselling services for students/parents. </p>
      <h2>Address</h2>
      <p>G-22/30, GF, Sector 7,
Rohini, Delhi – 110085</p>
<h2>Connect with us</h2>
 <ul>
      <li className="emailicon"><Link href={"#"}><a><EmailIcon /></a></Link></li>
      <li className="whatsappicon"><Link href={"#"}><a><WhatsAppIcon /></a></Link></li>
      <li className="facebookicon"><Link href={"#"}><a><FacebookIcon /></a></Link></li>
      <li className="linkednicon"><Link href={"#"}><a><LinkedInIcon /></a></Link></li>
      <li className="instaicon"><Link href={"#"}><a><InstagramIcon /></a></Link></li>
      <li className="twittericon"><Link href={"#"}><a><TwitterIcon /></a></Link></li>
 </ul>

      </div>
      <div className="footer2">
        <h2>Important leads</h2>
        <ul>
        <li><Link href={"#"}><a>About Us</a></Link></li>
        <li><Link href={"#"}><a>College predictor</a></Link></li>
        <li><Link href={"#"}><a>About Medical colleges</a></Link></li>
        <li><Link href={"#"}><a>Medical Admission Counselling</a></Link></li>
        <li><Link href={"#"}><a>Success Stories</a></Link></li>
        <li><Link href={"#"}><a>Blogs</a></Link></li>
        <li><Link href={"#"}><a>Contact us</a></Link></li>
        </ul>
      </div>
      <div className="footer3">
      <h2>Our Services</h2>
        <ul>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        <li><Link href={"#"}><a>Service1</a></Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="lastfooter">
  <div className="container">
    <h3>© Copyright - NEET Navigator Educational Services </h3>
  </div>
</div>
    </> 
  );
}

export default App;
