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
import Styles from "../../style/personaldetails.module.css";

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
            <h1>Personal Details </h1>
            <img src="/image/Group172.png" />
            <span className={Styles.maininput}>
              <blockquote>
                <h3>Address*</h3>
                <TextField id="outlined-basic" variant="outlined" />
              </blockquote>
              <blockquote>
                <h3>State*</h3>
                <Box sx={{ minWidth: 280 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ borderRadius: "60px" }}
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </blockquote>
            </span>
            <span className={Styles.maininput}>
              <blockquote>
                <h3>City*</h3>
                <Box sx={{ minWidth: 280 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ borderRadius: "60px" }}
                      value={age}
                      label="City"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </blockquote>
              <blockquote>
                <h3>Pin Code*</h3>
                <TextField id="outlined-basic" variant="outlined" />
              </blockquote>
            </span>
            <span className={Styles.maininput}>
              <blockquote>
                <h3>DOB</h3>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={"01/01/2020"}
                />
              </blockquote>
              <blockquote>
                <h3>Gender*</h3>
                <Box sx={{ minWidth: 280 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
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
              </blockquote>
            </span>
            <input type={"submit"} value="Next" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default PersonalDetails;
