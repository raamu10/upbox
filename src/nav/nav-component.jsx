import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { MenuList, Menu, MenuItem } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import CloseIcon from "@mui/icons-material/Close"
import logo from "../assets/logo.svg"
import topbar from "../assets/topbar-desktop.png"

const NavComponent = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" className="app-bar">
        <img src={topbar} alt="" />
        <Toolbar
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="" />
          </IconButton>

          <Typography component="div" sx={{ flexGrow: 1 }}>
            THIS MONTH
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            SKIN
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            HAIR
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            BATH
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            SALE
          </Typography>
          <Button color="inherit" variant="outlined" className="default-btn">
            Log IN{" "}
            <ArrowForwardIosIcon
              className="icon-style"
              sx={{ padding: "0px", width: "15px", marginLeft: "5px" }}
            />
          </Button>
        </Toolbar>

        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, float: "right" }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <MenuIcon />
          </IconButton>

          <Menu open={showMenu}>
            <div
              sx={{
                top: "0 !important",
                left: "0 !important",
                width: "100% !important",
                height: "100% !important",
                textAlign: "center !important",
                alignContent: "center !important",
              }}
            >
              <div>
                <CloseIcon onClick={() => setShowMenu(false)} />
              </div>
              <MenuList>
                <MenuItem>THIS MONTH</MenuItem>
                <MenuItem>SKIN</MenuItem>
                <MenuItem>HAIR</MenuItem>
                <MenuItem>BATH</MenuItem>
                <MenuItem>SALE</MenuItem>
                <MenuItem>LOGIN</MenuItem>
              </MenuList>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavComponent
