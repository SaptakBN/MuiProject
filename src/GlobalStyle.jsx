const Styles = (theme) => {
  return {
    html: {
      fontSize: "62.5%",

      "@media(max-width: 998px)": {
        fontSize: "55%",
      },

      "@media(max-width: 768px)": {
        fontSize: "45%",
      },
    },

    "html,body": {
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
    },

    "*": {
      boxSizing: "border-box",
      borderColor: theme.colors.borderColor.color1,
    },

    body: {
      backgroundColor: theme.colors.bodyBgColor,
      color: theme.colors.color.color1,
      fontFamily: `'Lato', sans-serif`,
      fontSize: "1.6rem",
    },

    p: {
      color: theme.colors.color.color3,
    },
    a: {
      textDecoration: "none",
    },
    "th.MuiTableCell-root": {
      fontSize: "16px !important",
      padding: "20px 5px 20px 15px !important",
      color: "#8E9299 !important",
      fontWeight: "500 !important",
      textAlign: "left !important",
    },
    "td.MuiTableCell-root": {
      fontSize: "14px !important",
      padding: "20px 5px 20px 15px !important",
      color: "#101828 !important",
      fontWeight: "500 !important",
      textAlign: "left !important",
      "&:last-child": {
        "& div": {
          display: "flex",
        },
        "& svg": {
          fontSize: "24px",
          marginRight: "7px",
        },
      },
    },
    ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiTypography-subtitle1":
      {
        fontSize: "16px !important",
      },
    "table td span svg.MuiSvgIcon-fontSizeMedium": {
      width: "30px",
      height: "30px",
    },
    ".MuiChip-root": {
      fontSize: "16px !important",
      padding: "2px 8px !important",
    },
    ".profile_toggle": {
      a: {
        width: "100%",
        color: "#000",
      },
      ".MuiPaper-elevation": {
        right: "30px !important",
        top: "70px !important",
        width: "180px !important",
        "& li": {
          fontSize: "16px",
        },
      },
    },
  };
};

export default Styles;
