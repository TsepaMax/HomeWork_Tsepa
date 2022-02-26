import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./use-styles";
import { showNameToggle } from "../store/profile/actions";
import { useCallback } from "react";
import { profileSelector } from "../store/profile/selectors";

export const ProfilePage = () => {
  const styles = useStyles();
  const { showName, name } = useSelector(profileSelector);
  const dispatch = useDispatch();

  const toShowName = useCallback(() => {
    dispatch(showNameToggle);
  }, [dispatch]);

  return (
    <div>
      <div>
        <p className={styles.homePageText}>
          My name is: {showName === true ? name : "******"}
        </p>
      </div>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={toShowName}
      />
      <span className={styles.homePageText}>Show my name</span>
    </div>
  );
};
