import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link,useNavigate  } from "react-router-dom";
import { Stack } from "@mui/material";
import useAuthContext from "../context/Authcontext"
// import { useNavigate } from "react-router-dom";

const pages = ["Add"];
// const settings = ["Profile", "Logout"];
const {user, logout} = useAuthContext;
// const navigate = useNavigate();
//   const handleLogout = () =>{
//     logout();
//     navigate("/login");
//   }

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  // const { user } = useAuthContext();


  return (
    <AppBar
      className="Bar"
      position="fixed"
      sx={{ backgroundColor: "#594035" }}
    >
      <Container maxWidth="auto">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              console.log("Go...");
            }}
          >
            LibraryBooks
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "black",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                {user && user.roles.includes("ROLES_ADMIN")&&( 
                  <Link className="navbar-brand2" to={`/${page.toLowerCase()}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
            )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography 
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LibraryBooks
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link className="navbar-brand" to={`/${page.toLowerCase()}`}>
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <Stack>
            <Link to={"/login"}>
            <Button variant="text" sx={{ color: "#ffff" , size:"30px" }}>
              log in 
            </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
