import React from "react";
import ProfessionalDetails from "./Component/ProfessionalDetails";
import PersonalDetails from "./Component/PersonalDetails";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Router } from "@material-ui/icons";

const MultiStepForm = () => {
  return (
    <Router>
      <div className="MultiStep">
        <Switch>
          <Route path="/" exact component={PersonalDetails}></Route>
          <Route
            path="/ProfessionalDetails"
            exact
            component={ProfessionalDetails}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MultiStepForm;
