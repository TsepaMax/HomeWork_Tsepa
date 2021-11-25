import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    chatNav: {
      paddingTop: "10px !important",
      paddingBottom: "0 !important",
    },

    chatItemLink: {
      textDecoration: "none",
    },

    chatItem: {
      display: "flex",
      alignItems: "center",
      width: "20% !important",
      minWidth: "200px",
      paddingLeft: "8px !important",
      height: "50px",
      margin: "0 20px 10px 20px",
      color: "#00d8ff",
      border: "1px solid #00d8ff",
      borderRadius: "5px",
      boxShadow: "0 2px 3px #00d8ff",
      "&:hover": {
        color: "purple",
        border: "1px solid purple",
        boxShadow: "0 2px 3px purple",
      },
    },

    avatar: {
      margin: "0 10px",
    },
  };
});
