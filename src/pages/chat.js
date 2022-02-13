import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChatList, MessageList } from "../components";
import { useStyles } from "./use-styles";

export const ChatPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [chats] = useState(["room1", "room2", "room3"]);

  /*   const [messages, setMessages] = useState({});

  function sendMessage(roomId, autor, value) {
    if (value) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: autor, message: value, date: new Date() },
        ],
      });
    }
  } */

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.chatListWrap}>
            <ChatList chats={chats} />
            <div>
              <p className={styles.chatListStarter}>Выберите чат</p>
            </div>
          </div>
        }
      />
      <Route
        path="/:roomId"
        element={
          <div className={styles.chatListWrap}>
            <ChatList chats={chats} />
            <MessageList /* messages={messages} sendMessage={sendMessage} */ />
          </div>
        }
      />
    </Routes>
  );
};
