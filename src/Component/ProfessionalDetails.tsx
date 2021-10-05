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
    history.push("/address");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Fill your Professional Details </h2>
      <p>
        <label htmlFor="firstName">Company Name </label>
        <input
          {...register("company")}
          type="text"
          name="company"
          defaultValue={professional.company}
          required
        />
      </p>
      <p>
        <label htmlFor="lastName">Designation </label>
        <input
          {...register("designation")}
          type="text"
          name="designation"
          defaultValue={professional.designation}
        />
      </p>
      <p>
        <label htmlFor="number"> Year Of Joining </label>
        <input
          {...register("yearOfJoining")}
          type="number"
          name="yearOfJoining"
          defaultValue={professional.yearOfJoining}
        />
      </p>

      <input type="submit" value="Next" />
      <button onClick={history.goBack}> Back </button>
    </form>
  );
};

export default ProfessionalDetails;
