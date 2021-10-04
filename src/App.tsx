import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "./Component/PersonalDetails";
import ProfessionalDetails from "./Component/ProfessionalDetails";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Address from "./Component/Address";

function App() {
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
          <Route path="/address" exact component={Address}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
