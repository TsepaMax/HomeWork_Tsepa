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
      margin: "0 5px 10px 5px",
      color: "#099",
      border: "1px solid #099",
      /* boxShadow: "0 2px 3px #00d8ff", */
      transition: "1s",
      "&:hover": {
        transition: "1s",
        color: "white",
        backgroundColor: "#099",
        border: "1px solid grey",
        boxShadow: "0 2px 3px grey",
      },
    },

    avatar: {
      margin: "0 10px",
    },

    delete: {
      position: "absolute",
      right: "5px",
    },
  };
});
