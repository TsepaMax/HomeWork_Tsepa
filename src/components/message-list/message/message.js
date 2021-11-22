import { memo } from "react";
// import classnames from "classnames";
import { useStyles } from "./use-styles";

export const Message = memo(({ message }) => {
  // const className = classnames("class1", "class2", {
  //   botMessage: message.author === "Bot"
  // });
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div>{message.author}</div>
      <div>{message.message}</div>
      <div>
        {message.date.getHours()}:{message.date.getMinutes()}
      </div>
      <hr />
    </div>
  );
});
