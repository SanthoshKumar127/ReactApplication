import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MultiStepForm from "./Component/MultiStepForm";

function App() {
  return (
    <Router>
      <div className="app">
        <MultiStepForm />
      </div>
    </Router>
  );
}

export default App;
