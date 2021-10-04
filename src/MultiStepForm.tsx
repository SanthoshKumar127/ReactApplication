import React from "react"
import {useForm, useStep} from "react-hooks-helper"
import PersonalDetails from "./PersonalDetails"
import ProfessionalDetails from "./ProfessionalDetails"
import Address from "./Address"
import Review from "./Review"
import { Submit } from "./Submit"

const defaultData = {
    firstName: "",
    lastName:"",
    email:"",
    company:"",
    designation:"",
    yearOfJoining:"",
    address:"",
    city:"",
    state:"",
    zip:"",
};

const steps = [
    {id:"Personal"},
    {id:"Address"},
    {id:"Professional"},
    {id:"Review"},
    {id:"Submit"},
];

const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:0,
    })

    const props = {formData, setFoem, navigation};

    switch(step.id) {
        case "Personal": return <PersonalDetails {...props} />;
        case "Address" : return <Address {...props} />;
        case "Professional": return <ProfessionalDetails {...props} />;
        case "Review" : return <Review {...props} />;
        case "Submit" : return <Submit {...props} />;

    }

    return (
        <div>
            <h1>Multi Step Form</h1>
        </div>
    )
}

export default MultiStepForm;