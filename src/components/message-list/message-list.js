import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";

export const MessageList = () => {
  const { roomId } = useParams();
  const styles = useStyles();
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");

  const ref = useRef(null);

  /*   useEffect(() => {
    ref.current?.focus();
  }, []); */

  function sendMessage() {
    if (value) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: "User", message: value, date: new Date() },
        ],
      });
      setValue("");
    }
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerId = null;

    if (roomMessages.length && lastMessage.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages({
          ...messages,
          [roomId]: [
            ...messages[roomId],
            { author: "Bot", message: "Hello from bot", date: new Date() },
          ],
        });
      }, 200);
    }
    return () => clearInterval(timerId);
  }, [messages, roomId]);

  const roomMessages = messages[roomId] ?? [];

  return (
    <div className={styles.wrapper}>
      {roomMessages.map((message, index) => (
        <Message message={message} key={index} />
      ))}

      <Input
        fullWidth
        className={styles.input}
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={sendMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};
