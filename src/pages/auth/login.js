/* eslint-disable jsx-a11y/alt-text */
import { Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../../components/checkbox";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Styles from "../../style/login.module.css";

function Login() {
  return (
    <>
      <Header />
      <Grid container spacing={10}>
        <Grid item xs={12} className={Styles.loginsection1}>
          <h1>Applicant Information</h1>
          <img src="/image/Group151.png" />
          <h3>Mobile Number</h3>
          <span className={Styles.mobilefield}>
            <TextField id="outlined-basic" variant="outlined" />
          </span>
          <h3>OTP*</h3>
          <span>
            <TextField id="outlined-basic" variant="outlined" />
            <TextField id="outlined-basic" variant="outlined" />
            <TextField id="outlined-basic" variant="outlined" />
            <TextField id="outlined-basic" variant="outlined" />
          </span>
          <span className={Styles.checkbox}>
            <Checkbox />
            <h2>Agree to Terms & Conditions</h2>
          </span>
          <input type={"submit"} value="Submit OTP" />
          <h4 className={Styles.lefttext}>
            Already have an account?{" "}
            <strong>
              <Link href={"#"}>REGISTER NOW</Link>
            </strong>
          </h4>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Login;
