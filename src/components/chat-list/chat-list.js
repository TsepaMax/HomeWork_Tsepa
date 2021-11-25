import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useStyles } from "./use-styles";
import { List, ListItem } from "@mui/material";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3"]);
  const styles = useStyles();

  return (
    <List component="nav" className={styles.chatNav}>
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`} className={styles.chatItemLink}>
          <ListItem
            key={chat}
            className={styles.chatItem}
            selected={chat === roomId}
          >
            <Avatar src="/broken-image.jpg" className={styles.avatar} />
            <h2>{chat}</h2>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
