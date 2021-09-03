import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: "#3F51B5",
  },
  Navigation: {
    fontSize: "1rem",
    flexGrow: 1,
    "& .toolbar": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .menuButton": {
        "& .menuIcon": {
          fontSize: "1.62em",
        },
        marginLeft: theme.spacing(1),
      },
      "& .title": {
        fontSize: "2em",
        marginRight: theme.spacing(5),
      },
    },
  },
  FrontPage: {
    height: "100vh",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontSize: "1rem",
    "& .fp-text-container": {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .fp-h2": {
      textAlign: "center",
      color: "white",
      fontSize: "6em",
    },
    "& .fp-spacer": {
      width: "45%",
    },
    "& .fp-image": {
      width: "100%",
      height: "inherit",
      opacity: ".5",
    },
  },
}));

export default useStyles;
