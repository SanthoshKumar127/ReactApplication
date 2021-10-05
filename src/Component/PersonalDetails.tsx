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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2> Fill your Personal Details </h2>
      <p>
        <label htmlFor="firstName">First Name </label>
        <input
          {...register("firstName")}
          type="text"
          name="firstName"
          defaultValue={personal.firstName}
          required
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name </label>
        <input
          {...register("lastName")}
          type="text"
          name="lastName"
          defaultValue={personal.lastName}
        />
      </p>
      <p>
        <label htmlFor="email"> Email </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          defaultValue={personal.email}
          required
        />
      </p>
      <input type="submit" value="Next" />
    </form>
  );
};

export default PersonalDetails;
