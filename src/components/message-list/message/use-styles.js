import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      maxWidth: "400px",
      border: "1px solid #099",
      boxShadow: "0 2px 3px #099",
      borderRadius: "5px",
      backgroundColor: "white",
      margin: "10px",
      padding: "2px 10px",
      display: "flex",
      flexDirection: "column",
    },

    author: {
      alignSelf: "flex-end",
      fontSize: "15px",
      fontStyle: "italic",
      color: "#099",
    },

    message: {
      wordWrap: "break-word",
    },

    date: {
      alignSelf: "flex-start",
      fontSize: "13px",
      fontStyle: "italic",
      color: "#099",
    },
  };
});
