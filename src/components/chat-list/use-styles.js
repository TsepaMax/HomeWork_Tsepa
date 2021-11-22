import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      paddingTop: "0 !important",
    },

    chatItem: {
      display: "flex",
      alignItems: "center",
      width: "200px !important",
      height: "50px",
      margin: "0 20px 10px 20px",
      border: "1px solid blue",
      borderRadius: "5px",
    },

    avatar: {
      margin: "0 10px",
    },
  };
});
