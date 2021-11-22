import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      border: "1px solid blue",
      borderRadius: "5px",
    },
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
      minWidth: "500px",
    },
    icon: {
      color: "var(--main-color)",
      cursor: "pointer",
    },
  };
});
