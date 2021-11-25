import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChatList, MessageList } from "../components";
import { useStyles } from "./use-styles";

export const ChatPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

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
            <ChatList />
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
            <ChatList />
            <MessageList />
          </div>
        }
      />
    </Routes>
  );
};
