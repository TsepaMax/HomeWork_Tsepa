import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    header: {
      display: "flex",
      padding: "0 25px",
      height: "5%",
      minHeight: "50px",
      background: "#099",
      alignItems: "center",
      justifyContent: "space-between",
    },

    headerNav: {
      color: "white",
      textDecoration: "none",
      lineHeight: 50,
      padding: "0 20px",
      fontSize: "20px",
      "&:hover": {
        color: "purple",
      },
    },

    icon: {
      color: "white !important",
    },
  };
});
