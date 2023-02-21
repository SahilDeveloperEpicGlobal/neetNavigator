/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Styles from "../../style/register.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Container } from "@mui/system";
import { Grid, Link, TextField } from "@mui/material";

function Register() {
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} className={Styles.loginsection}>
            <h1>Applicant Information</h1>
            <img src="/image/Group150.png" />
            <h3>Full Name</h3>
            <span className={Styles.mobilefield}>
              <TextField id="outlined-basic" variant="outlined" />
            </span>
            <h3>E-mail Id</h3>
            <span className={Styles.mobilefield}>
              <TextField id="outlined-basic" variant="outlined" />
            </span>
            <h3>Mobile Number</h3>
            <span className={Styles.mobilefield}>
              <TextField id="outlined-basic" variant="outlined" />
            </span>
            <h3>OTP*</h3>
            <span className={Styles.mobilefield}>
              <TextField id="outlined-basic" variant="outlined" />
            </span>
            <input type={"submit"} value="Submit OTP" />
            <h3 className={Styles.lefttext}>
              Already have an account?{" "}
              <strong>
                <Link href={"#"}>SIGN IN</Link>
              </strong>
            </h3>
            <input type={"submit"} value="Submit" />
            <img src="/image/w.jpeg" className={Styles.orimage} />
            <span>
              {" "}
              <img src="/image/pngwing.png" />
              <h2>Continue with Google</h2>
            </span>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
