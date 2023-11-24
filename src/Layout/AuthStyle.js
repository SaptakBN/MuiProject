import { styled } from "@mui/material/styles";
import { MuiBox } from "../Components/MUI";

export const StyledAuthLayout = styled(MuiBox)(({ theme }) => ({
  ".auth-area": {
    backgroundColor: "#EAF2FF",
    width: "100vw",
    height: "1453px",
    display: "flex",
    ".auth-section": {
      width: "1371px",
      height: "auto",
      margin: "auto",
      borderRadius: "40px",
      boxShadow: "0px 17px 29px 0px #0000000A",
      display: "flex",
      ".auth-image": {
        width: "50%",
        height: "auto",
        borderTopLeftRadius: "inherit",
        borderBottomLeftRadius: "inherit",
        backgroundImage: "url('../../public/image/auth-image.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      ".auth-outlet": {
        display: "flex",
        height: "fit-content",
        padding: "80px 60px",
        width: "50%",
        backgroundColor: theme.palette.common.white,
        borderTopRightRadius: "inherit",
        borderBottomRightRadius: "inherit",
      },
    },
  },
}));
