import React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import logo from "../assets/logo.svg"

const FooterComponent = () => {
  return (
    <Box>
      <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img class="footer-logo" src={logo} alt="" />
          </Grid>

          <Grid item xs={6}>
            <Box style={{ marginRight: "35px" }}>
              <InstagramIcon className="icon-style" />
              <FacebookIcon className="icon-style" />
              <TwitterIcon className="icon-style" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default FooterComponent
