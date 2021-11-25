import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      marginTop: "10px",
      backgroundColor: "whitesmoke",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      width: "inherit",
      height: "inherit",
      overflow: "auto",
    },

    input: {
      color: "#00d8ff",
      padding: "10px 15px",
      fontSize: "15px",
      minWidth: "400px",
    },

    icon: {
      color: "var(--main-color)",
      cursor: "pointer",
    },
  };
});
