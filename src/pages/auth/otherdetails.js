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
import Styles from "../../style/otherdetails.module.css";

function OtherDetails() {
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
            <h1>Other Details</h1>
            <img src="/image/undrawanalysis.png" />
            <span className={Styles.maininput}>
              <blockquote>
                <h3>NEET Category*</h3>
                <Box sx={{ minWidth: 280 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      NEET Category*
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      style={{ borderRadius: "60px" }}
                      id="demo-simple-select"
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
              <blockquote>
                <h3>State Category*</h3>
                <Box sx={{ minWidth: 280 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      State Category*
                    </InputLabel>
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
            <h3>Whether belongs to minority*</h3>
            <TextField
              id="outlined-basic"
              style={{ margin: "0px 20px" }}
              variant="outlined"
              value={"Weather belongs to minority"}
            />
            <h3>Whether belongs to minority*</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ margin: "0px 30px" }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <h3>Whether Belongs to Armed Force?</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ margin: "0px 30px" }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <h3>Whether Eligible for ESIC quota seats?</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ margin: "0px 30px" }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <input type={"submit"} value="Next" />
            <input type={"submit"} value="Back" className={Styles.backbutton} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default OtherDetails;
