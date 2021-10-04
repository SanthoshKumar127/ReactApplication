import Address from "./Address";
import { Button, Container, TextField } from "@material-ui/core";

const PersonalDetails = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, email } = formData;

  return (
    <Container maxWidth="xs">
      <h3> Personal Details </h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="Off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};

export default PersonalDetails;
