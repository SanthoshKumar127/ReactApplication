import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMultiStepForm } from "./MultiStepFormContext";

type ProfessionalDetailsProps = {
  company: string;
  designation: string;
  yearOfJoining: number;
};

const ProfessionalDetails: React.FC = () => {
  const { register, handleSubmit } = useForm<ProfessionalDetailsProps>();
  const history = useHistory();
  const { professional, setProfessional } = useMultiStepForm();

  const onSubmit: SubmitHandler<ProfessionalDetailsProps> = (data) => {
    setProfessional(data);
    console.log("data: from profile form", data);
    history.push("/address");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Fill your Professional Details </h2>
      <p>
        <label htmlFor="firstName">Company Name </label>
        <input
          type="text"
          name="company"
          defaultValue={professional.company}
          {...register}
        />
      </p>
      <p>
        <label htmlFor="lastName">Designation </label>
        <input
          type="text"
          name="designation"
          defaultValue={professional.designation}
          {...register}
        />
      </p>
      <p>
        <label htmlFor="number"> Year Of Joining </label>
        <input
          type="number"
          name="yearOfJoining"
          defaultValue={professional.yearOfJoining}
          {...register}
        />
      </p>

      <input type="submit" value="Next" />
    </form>
  );
};

export default ProfessionalDetails;
