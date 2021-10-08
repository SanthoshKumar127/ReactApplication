import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMultiStepForm } from "./MultiStepFormContext";

type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const PersonalDetails: React.FC = () => {
  const { register, handleSubmit } = useForm<PersonalDetailsProps>();
  const history = useHistory();
  const { personal, setPersonal } = useMultiStepForm();

  const onSubmit: SubmitHandler<PersonalDetailsProps> = (data) => {
    setPersonal(data);
    history.push("/professional");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Fill your Personal Details </h2>
      <p>
        <label htmlFor="firstName">First Name </label>
        <TextField
          {...register("firstName")}
          type="text"
          name="firstName"
          defaultValue={personal.firstName}
          required
        />
      </p>
      <nav>
        <label htmlFor="lastName">Last Name </label>
        <TextField
          {...register("lastName")}
          type="text"
          name="lastName"
          defaultValue={personal.lastName}
        />
      </nav>
      <nav>
        <label htmlFor="email"> Email </label>
        <TextField
          {...register("email")}
          type="email"
          name="email"
          defaultValue={personal.email}
          required
        />
      </nav>
      {/* <Button variant="contained" value = "next"> Next </Button> */}
      <input type="submit" value="Next" />
    </form>
  );
};

export default PersonalDetails;
