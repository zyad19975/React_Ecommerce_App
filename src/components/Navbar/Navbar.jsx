import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/core/node_modules/@material-ui/styles";
import useStyles from "./style";

import logo from "../../assets/commerce.png";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography varient="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton arial-lable="Show Cart Items" color="ingerit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
