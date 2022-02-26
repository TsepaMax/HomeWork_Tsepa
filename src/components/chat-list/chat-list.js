/* import React, { useState } from "react";
 */ import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useStyles } from "./use-styles";
import { List, ListItem } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addChat, delChat } from "../../store/chats/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { delMessages } from "../../store/messages/actions";

export const ChatList = ({ chats }) => {
  const { roomId } = useParams();
  /*   const [chats] = useState(["room1", "room2", "room3"]); */
  const styles = useStyles();
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const toAddChat = useCallback(() => {
    if (value !== "") {
      dispatch(addChat(value));
      setValue("");
    }
  }, [dispatch, value]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter" && value !== "") {
      dispatch(addChat(value));
      setValue("");
    }
  };

  const toDElChat = useCallback(
    (chatId) => {
      dispatch(delChat(chatId));
      dispatch(delMessages(chatId)); //при удалении чата, в котором отсутствуют сообщения, выполняется лишний экшн
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  /*   const toDElChat = (e) => {
    console.log(e);
  }; */

  return (
    <div style={({ display: "flex" }, { flexDirection: "column" })}>
      <List component="nav" className={styles.chatNav}>
        {chats.map((chat) => (
          <Link
            key={chat.chatId}
            to={`/chat/${chat.chatId}`}
            className={styles.chatItemLink}
          >
            <ListItem
              key={chat.chatId}
              className={styles.chatItem}
              selected={chat.chatId === roomId}
            >
              <Avatar src="/broken-image.jpg" className={styles.avatar} />
              <h2>{chat.chatName}</h2>
              <DeleteIcon
                className={styles.delete}
                onClick={() => toDElChat(chat.chatId)}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          maxLength="7"
          onKeyPress={handlePressInput}
          style={{ marginLeft: "5px" }}
        />
      </div>
      <div>
        <button onClick={toAddChat} style={{ margin: "5px" }}>
          Add chat
        </button>
      </div>
    </div>
  );
};
