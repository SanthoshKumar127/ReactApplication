import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type AddressProps = {
  address: string;
  city: string;
  state: string;
  zip: number;
};

const Address: React.FC = () => {
  const { register, handleSubmit } = useForm<AddressProps>();
  return (
    <form>
      <h2> Fill your Address </h2>
      <p>
        <label htmlFor="address"> Address </label>
        <input type="text" name="address" />
      </p>
      <p>
        <label htmlFor="city">City </label>
        <input type="text" name="city" />
      </p>
      <p>
        <label htmlFor="state"> State </label>
        <input type="text" name="state" />
      </p>
      <p>
        <label htmlFor="zip"> Zip Code </label>
        <input type="number" name="zip" />
      </p>

      <input type="submit" value="Save and Submit" />
    </form>
  );
};

export default Address;
