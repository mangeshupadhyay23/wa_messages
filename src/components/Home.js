import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ReactComponent as Home1 } from "../assets/home-1.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(#e1f1fc,#fff)",
    backgroundSize: "cover",
    height: "100vh",
    position: "relative",
  },

  heroTextBox: {
    position: "absolute",
    width: "1140px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  home1: {
    float: "right",
    marginLeft: "20px",
    borderRadius: "10px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <Navbar logo={"WA messages"} page={"home"} />
        <div className={classes.heroTextBox}>
          <h1>WA Messages</h1>
          <h2 style={{ color: "black" }}>
            hassle-free way for businesses to connect with their customers
          </h2>
          <button className="btn" type="button">
            <span>
              <a
                href="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up For Free{" "}
                <ion-icon
                  name="arrow-forward-outline"
                  style={{ verticalAlign: "middle" }}
                ></ion-icon>
              </a>
            </span>
          </button>
        </div>
      </header>
      <section>
        <div className="row">
          <h2>Wokr With Your Revenue Management Stack</h2>
          <Home1 className={classes.home1} />
          <p className="long-copy">
            Scale your SaaS through 480+ recurring billing scenarios that
            automate who you bill, when, and how. No humans, no spreadsheets, no
            missed payments!
            <ul className="features">
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Billing Schedules
              </li>
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Proration &
                Invoicing
              </li>
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Tax management
              </li>
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Payment Methods
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

