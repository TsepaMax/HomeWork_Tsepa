const ADD_CHAT = "CHATS::ADD_CHAT";
const DEL_CHAT = "CHATS::DEL_CHAT";

export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
});

export const delChat = (chatId) => ({
  type: DEL_CHAT,
  chatId,
});
