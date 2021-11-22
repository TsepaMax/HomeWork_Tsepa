import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useStyles } from "./use-styles";
import { List, ListItem } from "@mui/material";

export const ChatList = () => {
  const styles = useStyles();
  const [chatItem] = useState([
    { id: "1", name: "Bot 1" },
    { id: "2", name: "Bot 2" },
    { id: "3", name: "Bot 3" },
  ]);

  return (
    <List className={styles.wrapper}>
      {chatItem.map((item) => (
        <ListItem key={item.id} className={styles.chatItem}>
          <Avatar src="/broken-image.jpg" className={styles.avatar} />
          <h2>{item.name}</h2>
        </ListItem>
      ))}
    </List>
  );
};

// Без List и ListItem
/* return (
  <div className={styles.wrapper}>
    {chatItem.map((item) => (
      <div key={item.id} className={styles.chatItem}>
        <Avatar src="/broken-image.jpg" className={styles.avatar} />
        <h2>{item.name}</h2>
      </div>
    ))}
  </div>
);
 */
