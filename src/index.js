import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Input = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // Просто проверка в консоли, создание записи происходит при нажатии кнопки Submit
    console.log(value);
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      setMessages([...messages, { author: "Me", text: value }]);
    }
    setValue("");
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setTimeout(() => {
      alert("Новое сообщение добавлено!");
    }, 500);
  }, [messages]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите Ваше сообщение"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <MessagesList messages={messages} />
    </React.Fragment>
  );
};

const MessagesList = (props) => {
  return props.messages.map((message) => (
    <div>
      <h2>Author: {message.author}</h2>
      <p>Text: {message.text}</p>
      <hr />
    </div>
  ));
};

ReactDOM.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>,
  document.getElementById("root")
);
