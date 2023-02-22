/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Styles from "../../style/educationaldetails.module.css";

function PersonalDetails() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const steps = ["Personal Details", "Educational Details", "Other Details"];

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ width: "100%" }} className={Styles.steper}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <h2 className={Styles.personaltext}>Student Details</h2>
        <Grid container spacing={10}>
          <Grid item xs={12} className={Styles.loginsection1}>
            <h1>Educational Details</h1>
            <img src="/image/undrawbibli.png" />
            <h3>12th Passing State*</h3>
            <Box sx={{ minWidth: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  12th Passing State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  style={{ borderRadius: "60px" }}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h3>10th Passing State*</h3>
            <Box sx={{ minWidth: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  10th Passing State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{ borderRadius: "60px" }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h3>12th Passing Year</h3>
            <Box sx={{ minWidth: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">2022</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{ borderRadius: "60px" }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h3>Neet Year-in which student want top quality</h3>
            <Box sx={{ minWidth: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">2022</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{ borderRadius: "60px" }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <input type={"submit"} value="Next" />
            <input type={"submit"} value="Back" className={Styles.backbutton} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default PersonalDetails;
