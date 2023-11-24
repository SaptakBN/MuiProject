import { MuiTypography } from "./MUI";
import { StyledLogo } from "./StyledLogo";

export default function Logo() {
  return (
    <StyledLogo>
      <MuiTypography variant="h4">
        <MuiTypography variant="span" className="ai">
          AI
        </MuiTypography>{" "}
        <MuiTypography variant="span">Shift</MuiTypography>{" "}
        <MuiTypography variant="span" className="scheduler">
          Scheduler
        </MuiTypography>
      </MuiTypography>
    </StyledLogo>
  );
}
