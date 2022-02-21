import React, { useEffect, useRef, useState } from "react";
/* import { useParams } from "react-router-dom"; */
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
/* import { AUTHORS } from "../../../utils/constants"; */

export const InputForm = ({ onSubmit }) => {
  const styles = useStyles();
  const [value, setValue] = useState("");
  const textField = useRef();
  /*   const { roomId } = useParams(); */

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  });

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <Input
      fullWidth
      className={styles.input}
      inputRef={textField}
      /*       ref={textField} */
      placeholder="enter message..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={handlePressInput}
      endAdornment={
        <InputAdornment position="end">
          <Send className={styles.icon} onClick={handleSubmit} />
        </InputAdornment>
      }
    />
  );
};
