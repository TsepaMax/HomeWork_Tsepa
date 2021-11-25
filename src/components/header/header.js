import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./use-styles";
import { IconButton, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.headerNav}>
          Home
        </Link>
        <Link to="/profile" className={styles.headerNav}>
          Profile
        </Link>
        <Link to="/chat" className={styles.headerNav}>
          Chat
        </Link>
      </nav>
      <IconButton aria-label={"100"} className={styles.icon}>
        <Badge badgeContent={97} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </header>
  );
};
