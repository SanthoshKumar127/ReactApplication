import React, { FormEvent } from "react";
import { useHistory } from "react-router";
import { useMultiStepForm } from "./MultiStepFormContext";

function Review() {
  const { personal, professional, address } = useMultiStepForm();
  const history = useHistory();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    history.push("/success");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review all your info</h2>
      <p>
        <strong>First Name</strong>: {personal.firstName}
      </p>
      <p>
        <strong>Last Name</strong> : {personal.lastName}
      </p>
      <p>
        <strong>Email</strong>: {personal.email}
      </p>
      <p>
        <strong>Company</strong>: {professional.company}
      </p>
      <p>
        <strong>Designation</strong>: {professional.designation}
      </p>
      <p>
        <strong>Year Of Joining</strong>: {professional.yearOfJoining}
      </p>
      <p>
        <strong>Address</strong>: {address.address}
      </p>
      <p>
        <strong>City</strong>: {address.city}
      </p>
      <p>
        <strong>State</strong>: {address.state}
      </p>
      <p>
        <strong>Zip Code</strong>: {address.zip}
      </p>

      <input
        type="submit"
        value="Submit All Info"
        onClick={history.goForward}
      />
    </form>
  );
}

export default Review;
