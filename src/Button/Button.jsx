import React from "react";
import styles from "./Btn.module.css";
import { Button } from "@material-ui/core";

export function Btn() {
  return (
    <div>
      <Button>Login</Button>
      <Button className={styles.button}>Login</Button>
    </div>
  );
}
