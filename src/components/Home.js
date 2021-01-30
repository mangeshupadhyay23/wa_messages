import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import * as Mui from '@material-ui/core';
import { ReactComponent as Home1 } from "../assets/home-1.svg";
import { ReactComponent as Home2 } from "../assets/diagonal.svg";
import { ReactComponent as Sf } from "../assets/salesforce.svg";
import { ReactComponent as Hs } from "../assets/hubspot.svg";
import { ReactComponent as Pd } from "../assets/pipedrive.svg";
import './Home.css'

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
    marginLeft: "10px",
    borderRadius: "10px",
  },

  featuresList:{
    float: 'left',
    marginTop:"2%",
    marginBottom: '100px',
    width: '20%',
    marginRight: '5%',
    fontSize:'60%'
  }
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
      <section style={{marginBottom:"100px"}}>
        <div className="row">
          <h2>Wokr With Your Revenue Management Stack</h2>
          <Home1 className={classes.home1} />
          <p className="long-copy">
            Scale your SaaS through 480+ recurring billing scenarios that
            automate who you bill, when, and how. No humans, no spreadsheets, no
            missed payments!
            <ul className={classes.featuresList}>
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Billing Schedules
              </li>
              <li>
                <ion-icon name="checkmark-outline"></ion-icon>Proration &
                Invoicing
              </li>
            </ul>
            <ul className={classes.featuresList}>
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
      <section className="digaonal">
        <div className="row">
          <h1
            style={{ textAlign: "justify", color: "white", marginTop: "10px" }}
          >
            Works With Your <br />
            Revenue Management Stack
          </h1>
          <br />
          <p style={{ textAlign: "left", fontSize: "100%", color: "#CDC6DF" }}>
            Managing sales, payments, customer experience or your books:
            <br /> if it affects your revenue cycle, Chargebee works with it.
          </p>
          <Home2 />
        </div>

        <div style={{ float: "right" }}>
          <h3>Power Sales and Marketing CRM</h3>
          <ul style={{ display: "flex", padding: "2px" }}>
            <li>
              <Sf
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Hs
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Pd
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
          </ul>
          <p>
            Handle quotes, approvals, acceptance, and
            <br /> collections seamlessly from within the CRM.
          </p>
          <br />
          <Mui.Button variant="contained" style={{ color: "#000FF0" }}>
            Learn More&nbsp;
            <ion-icon
              name="arrow-forward-outline"
              style={{ verticalAlign: "middle" }}
            ></ion-icon>
          </Mui.Button>
        </div>
        <div>
          <h3>Power Sales and Marketing CRM</h3>
          <ul style={{ display: "flex", padding: "2px" }}>
            <li>
              <Sf
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Hs
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Pd
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
          </ul>
          <p>
            Handle quotes, approvals, acceptance, and
            <br /> collections seamlessly from within the CRM.
          </p>
          <br />
          <Mui.Button variant="contained" style={{ color: "#000FF0" }}>
            Learn More&nbsp;
            <ion-icon
              name="arrow-forward-outline"
              style={{ verticalAlign: "middle" }}
            ></ion-icon>
          </Mui.Button>
        </div>
        <div style={{ marginTop: "100px" }}>
          <h3>Power Sales and Marketing CRM</h3>
          <ul style={{ display: "flex", padding: "2px" }}>
            <li>
              <Sf
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Hs
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
            <li>
              <Pd
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
            </li>
          </ul>
          
          <p>
            Handle quotes, approvals, acceptance, and
            <br /> collections seamlessly from within the CRM.
          </p>
          <br />
          <Mui.Button variant="contained" style={{ color: "#000FF0" }}>
            Learn More&nbsp;
            <ion-icon
              name="arrow-forward-outline"
              style={{ verticalAlign: "middle" }}
            ></ion-icon>
          </Mui.Button>
        </div>

        <div className="row" style={{ marginTop: "50px" }}>
          <h3 style={{ textAlign: "center" }}>
            Talk to us today about your revenue workflow
          </h3>
          <Mui.Divider variant="middle" style={{ background: "white" }} />
          <button className="btn" type="button">
            <span>
              <a
                href="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Schedule a Demo
                <ion-icon
                  name="arrow-forward-outline"
                  style={{ verticalAlign: "middle" }}
                ></ion-icon>
              </a>
            </span>
          </button>
        </div>
      </section>
      <section>
        <h2>Still unsure? Step Inside and See What The Future Looks Like.</h2>
        <button className="btn" type="button">
          <span>
            <a
              href="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Schedule a Demo
              <ion-icon
                name="arrow-forward-outline"
                style={{ verticalAlign: "middle" }}
              ></ion-icon>
            </a>
          </span>
        </button>
        <Mui.Divider variant="middle" />
      </section>
      <section style={{marginBottom:"20px"}}>
        <div className="row footer-nav">
          <ul>
            <li>Product {">"}</li>
            <li>Subscription Management</li>
            <li>Recurring Billing and Invoicing</li>
            <li>Recurring Payments</li>
            <li>Accounting and Taxes</li>
            <li>SaaS Reporting</li>
            <li>Enterprise Billing</li>
            <li> Integrations</li>
          </ul>
          <ul>
            <li>Product {">"}</li>
            <li>Subscription Management</li>
            <li>Recurring Billing and Invoicing</li>
            <li>Recurring Payments</li>
            <li>Accounting and Taxes</li>
            <li>SaaS Reporting</li>
            <li>Enterprise Billing</li>
            <li> Integrations</li>
          </ul>
          <ul>
            <li>Product {">"}</li>
            <li>Subscription Management</li>
            <li>Recurring Billing and Invoicing</li>
            <li>Recurring Payments</li>
            <li>Accounting and Taxes</li>
            <li>SaaS Reporting</li>
            <li>Enterprise Billing</li>
            <li> Integrations</li>
          </ul>
          <ul>
            <li>Product {">"}</li>
            <li>Subscription Management</li>
            <li>Recurring Billing and Invoicing</li>
            <li>Recurring Payments</li>
            <li>Accounting and Taxes</li>
            <li>SaaS Reporting</li>
            <li>Enterprise Billing</li>
            <li> Integrations</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

