import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    chatListStarter: {
      fontSize: "23px",
      paddingLeft: "25px",
      color: "#00d8ff",
    },

    homePageWrap: {
      padding: "10px 20px",
      height: "95%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    homePageText: {
      fontSize: "30px",
      color: "#00d8ff",
    },

    toChatLink: {
      fontSize: "30px",
      textDecoration: "none",
      color: "#00d8ff",
      border: "1px solid #00d8ff",
      lineHeight: "60px",
      padding: "0 40px",
      borderRadius: "5px",
      boxShadow: "0 2px 3px #00d8ff",
      opacity: 0,
      transition: "1s",
      animation: "show 3s 1",
      animationFillMode: "forwards",
      animationDelay: "2s",
    },

    chatListWrap: {
      display: "flex",
      height: "95%",
      width: "100%",
      boxSizing: "border-box",
      paddingRight: "20px",
      paddingBottom: "20px",
    },
  };
});
