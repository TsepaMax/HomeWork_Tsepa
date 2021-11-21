import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const text = prompt("Введите сообщение:");

const Message = (props) => {
  return (
    <div className="message">
      <h1>Добрый день!</h1>
      <p>Вы ввели: {props.text}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Message text={text} />
  </React.StrictMode>,
  document.getElementById("root")
);
