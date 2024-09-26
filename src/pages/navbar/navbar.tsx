import * as React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Popover, Button } from "@mui/material";
import AuthContext from "../../context/auth-context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { logout } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const location = window.location;
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);
  const popoverId = isPopoverOpen ? "simple-popover" : undefined;

  const handleLogout = () => {
    logout();
    location.href = "/auth/login";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            My Ecommerce
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Link
            to="/dashboard/products"
            style={{ marginLeft: 20, color: "white", textDecoration: "none" }}
          >
            Products
          </Link>
          <Link
            to="/dashboard/orders"
            style={{ marginLeft: 20, color: "white", textDecoration: "none" }}
          >
            Orders
          </Link>
          <Link
            to="/dashboard/cart"
            style={{ marginLeft: 20, color: "white", textDecoration: "none" }}
          >
            Cart
          </Link>
          <Link
            to="/dashboard/about"
            style={{ marginLeft: 20, color: "white", textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/dashboard/contact"
            style={{ marginLeft: 20, color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>

          <IconButton sx={{ ml: 2 }} onClick={handlePopoverOpen}>
            <Avatar sx={{ backgroundColor: "rgba(63, 81, 181, 0.5)" }}></Avatar>
          </IconButton>
          <Popover
            id={popoverId}
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Box sx={{ p: 1, minWidth: "100px" }}>
              <Button
                onClick={handleLogout}
                sx={{
                  textTransform: "none",
                  fontSize: "0.875rem",
                  m: 0,
                }}
              >
                Logout
              </Button>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
