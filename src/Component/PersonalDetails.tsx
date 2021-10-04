import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ProfessionalDetails from "./ProfessionalDetails";

type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const PersonalDetails: React.FC = () => {
  const { register, handleSubmit } = useForm<PersonalDetailsProps>();
  return (
    <form>
      <h2> Fill your Personal Details </h2>
      <p>
        <label htmlFor="firstName">First Name </label>
        <input type="text" name="firstName" />
      </p>
      <p>
        <label htmlFor="lastName">Last Name </label>
        <input type="text" name="lastName" />
      </p>
      <p>
        <label htmlFor="email"> Email </label>
        <input type="email" name="name" />
      </p>

      <input type="submit" value="Next"/>
    </form>
  );
};

export default PersonalDetails;
