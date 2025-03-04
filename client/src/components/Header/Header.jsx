import React from "react";
import { AppBar, Button, Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/application";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    backgroundColor: "#fff",
  },
  logoHeader: {
    width: "90px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "150px",
  },
  profileLogo: {
    fontSize: "40px",
  },
  profileLogoLink: {
    color: "black",
  },
  escBtn: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "black",
    },
    color: "white",
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const id = useSelector((state) => state.application.id);
  console.log(id);
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <AppBar position={"static"}>
      <Box className={classes.header}>
        <Button component={Link} to={"/"} className={classes.title}>
          <img
            className={classes.logoHeader}
            src={"https://www.iloveimg.com/img/iloveimg.svg"}
          />
        </Button>
        {!token ? (
          <Button variant="contained" component={Link} to={"/sign-in"}>
            Войти
          </Button>
        ) : (
          <Box className={classes.profile}>
            <Button
              className={classes.escBtn}
              variant="contained"
              color="success"
              onClick={handleLogout}
              component={Link}
              to={"/"}
            >
              Выйти
            </Button>
            <Link className={classes.profileLogoLink} to={`/account/${id}`}>
              <AccountCircleIcon className={classes.profileLogo} />
            </Link>
          </Box>
        )}
      </Box>
    </AppBar>
  );
}

export default Header;
