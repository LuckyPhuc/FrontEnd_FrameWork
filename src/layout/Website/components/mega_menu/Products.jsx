import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Products() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        aria-controls="mega-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        component={Link}
        to="/products"
      >
        Products
      </Button>
    </div>
  );
}
