import { TextField } from "@material-ui/core";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { useMultiStepForm } from "./MultiStepFormContext";

type AddressProps = {
  address: string;
  city: string;
  state: string;
  zip: number;
};

const Address: React.FC = () => {
  const { register, handleSubmit } = useForm<AddressProps>();
  const history = useHistory();
  const { address, setAddress } = useMultiStepForm();

  const onSubmit: SubmitHandler<AddressProps> = (data) => {
    setAddress(data);
    history.push("/review");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Fill your Address </h2>
      <p>
        <label htmlFor="address"> Address </label>
        <TextField
          {...register("address")}
          type="text"
          name="address"
          defaultValue={address.address}
          required
        />
      </p>
      <p>
        <label htmlFor="city">City </label>
        <TextField
          {...register("city")}
          type="text"
          name="city"
          defaultValue={address.city}
          required
        />
      </p>
      <p>
        <label htmlFor="state"> State </label>
        <TextField
          {...register("state")}
          type="text"
          name="state"
          defaultValue={address.state}
          required
        />
      </p>
      <p>
        <label htmlFor="zip"> Zip Code </label>
        <TextField
          {...register("zip")}
          type="number"
          name="zip"
          defaultValue={address.zip}
          required
        />
      </p>

      <input type="submit" value="Save and Submit" />
      <button onClick={history.goBack}> Back </button>
    </form>
  );
};

export default Address;
