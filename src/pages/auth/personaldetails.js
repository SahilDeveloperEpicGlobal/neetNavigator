import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Styles from "../../style/personaldetails.module.css";

function PersonalDetails() {
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} className={Styles.loginsection1}>
            <span>
              <strong>1</strong>
              personal details
            </span>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default PersonalDetails;
