import React from "react";
import { Adb } from "@mui/icons-material";
import { Typography } from "@mui/material";
function Logo() {
  return (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        HOANG PHUC
      </Typography>
    </div>
  );
}

export default Logo;
