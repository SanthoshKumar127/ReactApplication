function ProfessionalDetails() {
    return (
      <div className="Professional">
        <form>
          <div>
            <label>Company</label> : <input type="text" required></input>
          </div>
          <div>
            <label>Designation </label> : <input type="text"></input>
          </div>
          <div>
            <label>Year of joining</label>: <input type="text"></input>
          </div>
          <div>
            <label>Project</label> : <input type="text"></input>
          </div>
          <div>
            <button type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default ProfessionalDetails;