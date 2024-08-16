import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import box from "../assets/box.png"
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work2Art from "../assets/work2-art.png"

const ContentComponent = () => {
  return (
    <Container fixed style={{ marginTop: "10px", alignContent: "center" }}>
      <div style={{ bgcolor: "#ffffff" }}>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignContent: "left" }}>
            <Typography
              component="div"
              variant="h4"
              className="content-first"
              sx={{ flexGrow: 6 }}
            >
              Look good without leaving your house.
            </Typography>
            <Typography
              component="div"
              variant="h7"
              className="content-sec"
              sx={{ flexGrow: 6 }}
            >
              Upbox is the easiest way to look your best without having to hunt
              for the perfect makeup combination. Our stylists curate the latest
              trends and send them directly to your door every month
            </Typography>
            <Button variant="outlined" className="default-btn signup-btn">
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: "10px" }}>
            <img className="image" src={box} alt="" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <img className="image" src={work1} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} style={{ alignContent: "center" }}>
            <Typography
              component="div"
              variant="h4"
              className="content-first"
              sx={{ flexGrow: 6 }}
            >
              Setup your profile & preferences
            </Typography>
            <Typography
              component="div"
              variant="h7"
              className="content-sec"
              sx={{ flexGrow: 6 }}
            >
              Once you create your account you can start to tell us your like
              and dislikes so we can tailor the experience just for you.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignContent: "center" }}>
            <Typography
              component="div"
              variant="h4"
              className="content-first"
              sx={{ flexGrow: 6 }}
            >
              Review your custom box
            </Typography>
            <Typography
              component="div"
              variant="h7"
              className="content-sec"
              sx={{ flexGrow: 6 }}
            >
              Once we get to know you, we will show you the box we've crafted.
              This is your chance to approve it before we ship it to your house.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img className="image image-pack" src={work2} alt="" />
            <img className="image-art2" src={work2Art} alt="" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <img className="image" src={work3} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} style={{ alignContent: "center" }}>
            <Typography
              component="div"
              variant="h4"
              className="content-first"
              sx={{ flexGrow: 6 }}
            >
              Try it on at home
            </Typography>
            <Typography
              component="div"
              variant="h7"
              className="content-sec"
              sx={{ flexGrow: 6 }}
            >
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you'r not in love with.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "10px" }}>
          <Grid item xs={12} style={{ alignContent: "center" }}>
            <Button variant="outlined" className="default-btn btn-try">
              Try IT FOR YOURSELF{" "}
              <ArrowForwardIosIcon
                className="icon-style"
                sx={{ padding: "0px", width: "15px", marginLeft: "5px" }}
              />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default ContentComponent
