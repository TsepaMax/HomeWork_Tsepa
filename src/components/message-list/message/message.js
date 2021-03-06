import { memo } from "react";
//import className from "classnames";
import { useStyles } from "./use-styles";

export const Message = memo(({ message }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>{message.author}</div>
      <div className={styles.message}>{message.message}</div>
      <div className={styles.date}>
        {message.date.getHours()}:{message.date.getMinutes()}
      </div>
    </div>
  );
});
