import { Link } from "react-router-dom";
import FormHeader from "../Components/FormHeader";
import Logo from "../Components/Logo";
import {
  MuiBox,
  MuiButton,
  MuiFormControlLabel,
  MuiInputField,
  MuiMenuItem,
  MuiRadio,
  MuiRadioGroup,
  MuiSelect,
  MuiTypography,
} from "../Components/MUI";
import { StyledSignup } from "./StyledSignup";
import { useState } from "react";

export default function SignUp() {
  const [radioState, setRadioState] = useState("businessPlan");
  return (
    <StyledSignup>
      <Logo />
      <FormHeader />
      <form>
        <MuiBox className="formLayout">
          <MuiBox className="formField">
            <MuiTypography component="label">Name</MuiTypography>
            <MuiInputField type="text" placeholder="Name" />
          </MuiBox>
          <MuiBox className="formFieldGroup">
            <MuiBox className="formField">
              <MuiTypography component="label">Email</MuiTypography>
              <MuiInputField type="email" placeholder="email" />
            </MuiBox>
            <MuiBox className="formField">
              <MuiTypography component="label">Phone Number</MuiTypography>
              <MuiBox className="inputGrouping">
                <MuiSelect value="default" className="inputSelect">
                  <MuiMenuItem value="default">US</MuiMenuItem>
                </MuiSelect>
                <MuiInputField
                  className="inputPhone"
                  type="tel"
                  placeholder="Phone number"
                />
              </MuiBox>
            </MuiBox>
          </MuiBox>
          <MuiBox className="formField">
            <MuiTypography component="label">Company name</MuiTypography>
            <MuiInputField type="text" placeholder="Company name" />
          </MuiBox>
          <MuiBox className="formField">
            <MuiTypography component="label">
              Select subscription plan
            </MuiTypography>
            <MuiRadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <MuiFormControlLabel
                className={`radioLable ${
                  radioState === "basicPlan" ? "active" : ""
                }`}
                value="basicPlan"
                control={
                  <MuiRadio
                    name="plan"
                    value="basicPlan"
                    checked={radioState === "basicPlan"}
                    onChange={(e) => setRadioState(e.target.value)}
                  />
                }
                label="Basic Plan"
                labelPlacement="bottom"
              />
              <MuiFormControlLabel
                className={`radioLable ${
                  radioState === "businessPlan" ? "active" : ""
                }`}
                value="businessPlan"
                control={
                  <MuiRadio
                    name="plan"
                    value="businessPlan"
                    checked={radioState === "businessPlan"}
                    onChange={(e) => setRadioState(e.target.value)}
                  />
                }
                label="Business Plan"
                labelPlacement="bottom"
              />
              <MuiFormControlLabel
                className={`radioLable ${
                  radioState === "enterprisePlan" ? "active" : ""
                }`}
                value="enterprisePlan"
                control={
                  <MuiRadio
                    name="plan"
                    value="enterprisePlan"
                    checked={radioState === "enterprisePlan"}
                    onChange={(e) => setRadioState(e.target.value)}
                  />
                }
                label="Enterprise plan"
                labelPlacement="bottom"
              />
            </MuiRadioGroup>
          </MuiBox>

          <MuiBox className="formField">
            <MuiTypography component="label">Password</MuiTypography>
            <MuiInputField type="passowrd" placeholder="password" />
          </MuiBox>
          <MuiTypography className="formLink">
            <Link>Forgot Password?</Link>
          </MuiTypography>
          <MuiButton className="formButton">Get Started</MuiButton>
          <MuiTypography className="formLink">
            Already have an account? <Link>Log in</Link>
          </MuiTypography>
        </MuiBox>
      </form>
    </StyledSignup>
  );
}
