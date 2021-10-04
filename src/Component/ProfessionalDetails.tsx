import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProfessionalDetailsProps = {
  company: string;
  designation: string;
  yearOfJoining: number;
};

const ProfessionalDetails: React.FC = () => {
  const { register, handleSubmit } = useForm<ProfessionalDetailsProps>();
  return (
    <form>
      <h2> Fill your Professional Details </h2>
      <p>
        <label htmlFor="firstName">Company Name </label>
        <input type="text" name="company" />
      </p>
      <p>
        <label htmlFor="lastName">Designation </label>
        <input type="text" name="designation" />
      </p>
      <p>
        <label htmlFor="number"> Year Of Joining </label>
        <input type="number" name="yearOfJoining" />
      </p>

      <input type="submit" value="Next" />
    </form>
  );
};

export default ProfessionalDetails;
