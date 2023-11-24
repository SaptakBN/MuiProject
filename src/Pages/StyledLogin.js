import { styled } from "@mui/material/styles";
import { MuiBox } from "../Components/MUI";

export const StyledLogin = styled(MuiBox)(({ theme }) => ({
  ".form-heading": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "40px 0px",
    h2: {
      fontSize: "48px",
      fontWeight: "600",
      lineHeight: "60px",
      letterSpacing: "-0.02em",
      textAlign: "left",
    },
    p: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "30px",
      letterSpacing: "0em",
      textAlign: "left",
      paddingTop: "24px",
    },
  },
  form: {
    padding: "20px 0px",
    ".formLayout": {
      ".formField": {
        padding: "16px 0px",
        label: {
          padding: "8px 0px",
          fontSize: "20px",
        },
        ".MuiFormControl-root": {
          input: {
            padding: "12px",
            fontSize: "20px",
          },
        },
      },
      ".formLink": {
        fontSize: "18px",
        marginTop: "12px",
        a: {
          color: "#518FED",
          fontWeight: "500",
        },
      },
      button: {
        marginTop: "120px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#518FED",
        color: "#FFFFFF",
        fontSize: "24px",
        padding: "12px",
        marginBottom: "24px",
      },
    },
  },
}));
