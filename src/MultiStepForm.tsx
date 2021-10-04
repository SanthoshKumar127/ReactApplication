import React from "react";
// import { useForm, useStep } from "react-hooks-helper";

type PersonDetails = {
  firstName: string;
  lastName: string;
  email: string;
};

const MultiStepForm = () => {
  return (
    <form>
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="name" name="name" />
      </div>

      <div className="field">
        <label htmlFor="lastName">Last Name</label>
        <input type="number" id="score" name="score" />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default MultiStepForm;
