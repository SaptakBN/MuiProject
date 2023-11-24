import { Outlet } from "react-router-dom";
import { StyledAuthLayout } from "./AuthStyle";
import { MuiBox } from "../Components/MUI";

export default function AuthLayout() {
  return (
    <StyledAuthLayout>
      <MuiBox className="auth-area">
        <MuiBox className="auth-section">
          <MuiBox className="auth-image"></MuiBox>
          <MuiBox className="auth-outlet">
            <Outlet />
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </StyledAuthLayout>
  );
}
