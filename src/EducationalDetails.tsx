import ProfessionalDetails from "./ProfessionalDetails";

function EducationalDetails() {
    return (
      <div className="Education">
        <form>
          <div>
            <label>Graduation</label> : <input type="text" required></input>
          </div>
          <div>
            <label>College </label> : <input type="text"></input>
          </div>
          <div>
            <label>Stream</label>: <input type="text"></input>
          </div>
          <div>
            <label>Year Of Passed</label> : <input type="text"></input>
          </div>
          <div>
            <button type="submit" value="submit">
              Next
            </button>
            <ProfessionalDetails />
          </div>
        </form>
      </div>
    );
  }
  
  export default EducationalDetails;