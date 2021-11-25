import { Link } from "react-router-dom";
import { useStyles } from "./use-styles";

export const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.homePageWrap}>
      <div className={styles.homePageText}>
        This application is developed by using
      </div>
      <img
        src="./img/react-logo.png"
        alt="React logo"
        width="640"
        height="360"
        className={styles.homePageImg}
      ></img>
      <Link to="/chat" className={styles.toChatLink}>
        Start !
      </Link>
    </div>
  );
};
