/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../style/studentdetails.module.css";
import {
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

function StudentDetails() {
  return (
    <>
      <Header />
      <Grid container spacing={10}>
        <Grid item xs={12} className={Styles.loginsection1}>
          <h1>Students Fields</h1>
          <img src="/image/undraw.png" />
          <span className={Styles.maininput}>
            <blockquote>
              <h3>Full Name</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>Email Id</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <span className={Styles.maininput}>
            <blockquote>
              <h3>Phone Number</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>Date of Birth</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <span className={Styles.maininput}>
            <blockquote>
              <h3>Gender</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>Address</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <span className={Styles.maininput}>
            <blockquote>
              <h3>Pin Code</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>District</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <span className={Styles.maininput}>
            <blockquote>
              <h3>10th Passing State</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>12th Passing State</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <span className={Styles.maininput}>
            <blockquote>
              <h3>10th Passing Year</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
            <blockquote>
              <h3>12th Passing Year</h3>
              <TextField id="outlined-basic" variant="outlined" />
            </blockquote>
          </span>
          <Container>
            <h3>Weather PH Candidate?</h3>
            <span className={Styles.radioinput}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </span>
            <h3>Weather belongs to armed forces</h3>
            <span className={Styles.radioinput}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </span>
            <h3>Whether belongs to minority?</h3>
            <span className={Styles.radioinput}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </span>
            <h3>Whether NRI/NRI Sponsored candidates</h3>
            <span className={Styles.radioinput}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </span>
            <h3>Whether Eligible for ESIC for quota seats?</h3>
            <span className={Styles.radioinput}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </span>
          </Container>
          <input type={"submit"} value="Next" />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default StudentDetails;
