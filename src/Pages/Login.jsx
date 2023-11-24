import { Link } from "react-router-dom";
import FormHeader from "../Components/FormHeader";
import Logo from "../Components/Logo";
import {
  MuiBox,
  MuiButton,
  MuiInputField,
  MuiTypography,
} from "../Components/MUI";
import { StyledLogin } from "./StyledLogin";

export default function Login() {
  return (
    <StyledLogin>
      <Logo />
      <FormHeader />
      <form>
        <MuiBox className="formLayout">
          <MuiBox className="formField">
            <MuiTypography component="label">Email</MuiTypography>
            <MuiInputField type="email" placeholder="email" />
          </MuiBox>
          <MuiBox className="formField">
            <MuiTypography component="label">Password</MuiTypography>
            <MuiInputField type="passowrd" placeholder="password" />
          </MuiBox>
          <MuiTypography className="formLink">
            <Link>Forgot Password?</Link>
          </MuiTypography>
          <MuiButton className="formButton">Login</MuiButton>
          <MuiTypography className="formLink">
            Does not have an account? <Link>Sign up</Link>
          </MuiTypography>
        </MuiBox>
      </form>
    </StyledLogin>
  );
}
