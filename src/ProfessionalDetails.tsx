import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

const ProfessionalDetails = {(formData, setForm, navigation)} => {
  const {company, designation, yearOfJoining} = formData;
  return (
    <Container maxWidth="xs">
      <h3>Professional Details</h3>
      <TextField
      label="Company"
      name = "company"
      value = {company}
      onChange = {setForm}
      margin = "normal"
      variant = "outlined"
      autoComplete = "off"
      fullWidth
      />
      <TextField
      label="Designation"
      name = "designation"
      value = {designation}
      onChange = {setForm}
      margin = "normal"
      variant = "outlined"
      autoComplete = "off"
      fullWidth
      />
      <TextField
      label="Year Of Joining"
      name = "yearOfJoining"
      value = {yearOfJoining}
      onChange = {setForm}
      margin = "normal"
      variant = "outlined"
      autoComplete = "off"
      fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
  
  export default ProfessionalDetails;