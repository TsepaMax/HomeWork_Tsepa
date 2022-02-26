const initialState = {
  chatList: [
    { chatId: "room1", chatName: "room1" },
    { chatId: "room2", chatName: "room2" },
    { chatId: "room3", chatName: "room3" },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHATS::ADD_CHAT": {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            chatId: `room${/* state.chatList.length + 1 */ new Date()}`,
            chatName: action.name,
          },
        ],
      };
    }

    case "CHATS::DEL_CHAT":
      return {
        ...state,
        chatList: state.chatList.filter(
          (chat) => chat.chatId !== action.chatId
        ),
      };

    default:
      return state;
  }
};
