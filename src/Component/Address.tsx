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
    console.log("data: from profile form", data);
    history.push("/review");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Fill your Address </h2>
      <p>
        <label htmlFor="address"> Address </label>
        <input type="text" name="address" defaultValue={address.address} {...register}/>
      </p>
      <p>
        <label htmlFor="city">City </label>
        <input type="text" name="city" defaultValue={address.city} {...register}/>
      </p>
      <p>
        <label htmlFor="state"> State </label>
        <input type="text" name="state" defaultValue={address.state} {...register}/>
      </p>
      <p>
        <label htmlFor="zip"> Zip Code </label>
        <input type="number" name="zip" defaultValue={address.zip} {...register}/>
      </p>

      <input type="submit" value="Save and Submit" />
    </form>
  );
};

export default Address;
