import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Categories() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="mega-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        color="inherit"
      >
        Categories
      </Button>
      <Menu
        id="mega-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 500, // Điều chỉnh kích thước theo yêu cầu
            maxHeight: 300, // Điều chỉnh chiều cao tối đa theo yêu cầu
          },
        }}
      >
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={6}>
            <MenuItem onClick={handleClose}>Category 1</MenuItem>
            <MenuItem onClick={handleClose}>Category 2</MenuItem>
          </Grid>
          <Grid item xs={6}>
            <MenuItem onClick={handleClose}>Category 3</MenuItem>
            <MenuItem onClick={handleClose}>Category 4</MenuItem>
          </Grid>
          {/* Bạn có thể thêm nhiều lựa chọn và phân loại ở đây */}
        </Grid>
      </Menu>
    </div>
  );
}
