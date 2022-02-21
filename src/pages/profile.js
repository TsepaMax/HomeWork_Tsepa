import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./use-styles";
import { showNameToggle } from "../store/profile/actions";
import { useCallback, useState } from "react";

export const ProfilePage = () => {
  const styles = useStyles();
  const [upd, setUpd] = useState(0);

  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toShowName = useCallback(() => {
    dispatch(showNameToggle);
    setUpd((prevUpd) => prevUpd + 1);
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
