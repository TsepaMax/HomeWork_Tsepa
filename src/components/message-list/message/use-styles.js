import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      maxWidth: "400px",
      border: "1px solid #00d8ff",
      boxShadow: "0 2px 3px #00d8ff",
      borderRadius: "5px",
      backgroundColor: "white",
      margin: "10px",
      padding: "2px 10px",
    },

    message: {
      wordWrap: "break-word",
    },
  };
});
