import EducationalDetails from "./EducationalDetails";

function PersonalDetails() {
  return (
    <div className="Personal">
      <form>
        <div>
          <label>First Name</label> : <input type="text" required></input>
        </div>
        <div>
          <label>Last Name</label> : <input type="text"></input>
        </div>
        <div>
          <label>Gender</label>: <input type="text"></input>
        </div>
        <div>
          <label>Experience</label> : <input type="text"></input>
        </div>
        <div>
          <button type="submit" value="submit" >
            Next
          </button>
          <EducationalDetails />
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
