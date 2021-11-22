import React from "react";
import { useStyles } from "./use-styles";
import { IconButton, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <h1>Chat</h1>
      <IconButton aria-label={"100"} className={styles.icon}>
        <Badge badgeContent={97} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </header>
  );
};
