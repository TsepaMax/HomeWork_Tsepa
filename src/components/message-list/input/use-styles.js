import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    input: {
      color: "#00d8ff",
      padding: "10px 15px",
      fontSize: "15px",
      minWidth: "400px",
      backgroundColor: "white",
      "&:after": {
        borderBottom: "2px solid #099 !important",
      },
    },

    icon: {
      color: "var(--main-color)",
      cursor: "pointer",
      transition: "1s",
      "&:hover": {
        color: "#099",
        transition: "1s",
      },
    },
  };
});
/* after {
  border-bottom: 2px solid #0000ff; */
