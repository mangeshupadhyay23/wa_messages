import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});



const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{background: "linear-gradient(#7638e7,#5b2cb3)"}}>
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home" href="/">
            {props.logo}
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {props.page==="home" &&
                <a href={"/login"} key={"login"} className={classes.linkText}>
                    <ListItem button>
                        <ListItemText primary={'Log In'} />
                        <ion-icon name="log-in-outline"></ion-icon>
                    </ListItem>
                </a>
            }
            {props.page==="dashboard" &&
                <Button onClick={props.logout} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={"Log Out"} />
                    <ion-icon name="log-out-outline" ></ion-icon>
                    </ListItem>
                </Button>
            }
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
