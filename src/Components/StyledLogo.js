import { styled } from "@mui/material/styles";
import { MuiBox } from "./MUI";

export const StyledLogo = styled(MuiBox)(({ theme }) => ({
  ".MuiTypography-root": {
    fontWweight: "800",
    fontSize: "medium",
    ".ai": {
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      backgroundColor: "#518FED",
      color: theme.palette.common.white,
      padding: "8px",
      display: "inline-flex",
    },
    ".scheduler": {
      color: "#518FED",
    },
  },
}));
