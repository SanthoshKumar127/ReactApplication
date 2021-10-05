import React from "react";
import ProfessionalDetails from "./ProfessionalDetails";
import PersonalDetails from "./PersonalDetails";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Address from "./Address";
import Review from "./Review";
import MultiStepFormProvider from "./MultiStepFormContext";

function MultiStepForm() {
  return (
    <MultiStepFormProvider>
      <div className="MultiStep">
        <Switch>
          <Route path="/" exact component={PersonalDetails}>
            {" "}
            <PersonalDetails />
          </Route>
          <Route path="/professional" component={ProfessionalDetails}>
            <ProfessionalDetails />
          </Route>
          <Route path="/address" exact component={Address}>
            <Address />
          </Route>
          <Route path = "/review" component={Review}>
            <Review />
          </Route>
        </Switch>
      </div>
    </MultiStepFormProvider>
  );
}

export default MultiStepForm;
