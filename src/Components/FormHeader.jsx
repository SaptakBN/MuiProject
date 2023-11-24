import { MuiBox, MuiTypography } from "./MUI";

export default function FormHeader() {
  return (
    <MuiBox className="form-heading">
      <MuiTypography variant="h2">
        Let’s level up your brand, together
      </MuiTypography>
      <MuiTypography>
        You can reach us anytime via hi@untitledui.com
      </MuiTypography>
    </MuiBox>
  );
}
