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
    console.log("data: from profile form", data);
    history.push("/professional");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2> Fill your Personal Details </h2>
      <p>
        <label htmlFor="firstName">First Name </label>
        <input
          type="text"
          name="firstName"
          defaultValue={personal.firstName}
          {...register}
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name </label>
        <input
          type="text"
          name="lastName"
          defaultValue={personal.lastName}
          {...register}
        />
      </p>
      <p>
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          name="name"
          defaultValue={personal.email}
          {...register}
        />
      </p>
      <input type="submit" value="Next" />
    </form>
  );
};

export default PersonalDetails;
