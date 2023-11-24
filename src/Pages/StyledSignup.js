import { styled } from "@mui/material/styles";
import { MuiBox } from "../Components/MUI";

export const StyledSignup = styled(MuiBox)(({ theme }) => ({
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
      label: {
        padding: "8px 0px",
        fontSize: "20px",
      },
      ".formFieldGroup": {
        display: "flex",
        gap: "30px",
      },
      ".formField": {
        padding: "16px 0px",

        ".inputGrouping": {
          display: "flex",
          ".inputSelect": {
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            ".MuiSelect-select": {
              minHeight: "0px!important",
              height: "20px",
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderRight: "0px",
            },
          },
          ".inputPhone": {
            ".MuiInputBase-root": {
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              ".MuiOutlinedInput-notchedOutline": {
                borderLeft: "0px",
              },
            },
          },
        },
        ".MuiFormGroup-root": {
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
          ".MuiFormControlLabel-root": {
            padding: "20px",
            backgroundColor: "rgba(169, 184, 205, 0.25)",
            borderRadius: "10px",
            // height: "41px",
            flexShrink: "0",
            boxShadow: "0px 17px 29px 0px rgba(0, 0, 0, 0.04)",
            ".MuiTypography-root": {
              color: "#101828",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30px",
            },
          },
          ".MuiFormControlLabel-root.active": {
            padding: "20px",
            backgroundColor: "#518FED",
            borderRadius: "10px",
            // height: "41px",
            flexShrink: "0",
            boxShadow: "0px 17px 29px 0px rgba(0, 0, 0, 0.04)",
            ".MuiTypography-root": {
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30px",
            },
          },
        },
        ".radioLable": {
          ".MuiButtonBase-root": {
            display: "none",
          },
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
        marginTop: "40px",
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
