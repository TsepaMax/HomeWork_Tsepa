import { useStyles } from "./use-styles";

export const ProfilePage = () => {
  const styles = useStyles();

  return (
    <div>
      <p className={styles.homePageText}>ProfilePage</p>
    </div>
  );
};
