import { Button } from "@mui/material";
import css from "./Button.module.css";

import React from "react";

export function Btn({ onClick, children }) {
  return (
    <div className={css.boxBtnLoadMore}>
      <Button variant="contained" type="button" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
