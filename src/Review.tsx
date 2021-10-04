import React from "react";
import {
  Container,
  Button,
  Accordion,
  ListItemText,
  IconButton,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import ProfessionalDetails from "./ProfessionalDetails";

const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    email,
    company,
    designation,
    yearOfJoining,
    address,
    city,
    state,
    zip,
  } = formData;

  return (
    <Container maxWidth="sm">
      <h3>Review</h3>
      <RenderAccordion
        summary="Personal"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { "Email Address": email },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
        ]}
      />
      <RenderAccordion
        summary="Professional"
        go={go}
        details={[
          { Company: company },
          { Designation: designation },
          { "Year Of Joining": yearOfJoining },
        ]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Container>
  );

  export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {details.map((data, index) => {
            const objKey = object.keys(data)[0];
            const objValue = data[object.keys(data)[0]];

            return (
              <ListItemText key={index}>
                {" "}
                {`${objKey}: ${objValue}`}
              </ListItemText>
            );
          })}

          <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          >
            <EditIcon />
          </IconButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Review;
