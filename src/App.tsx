import React from "react";
import MultiStepForm from "./MultiStepForm";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "./Component/PersonalDetails";
import ProfessionalDetails from "./Component/ProfessionalDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <PersonalDetails /> */}
        <ProfessionalDetails />
      </div>
    </Router>
  );
}

export default App;
