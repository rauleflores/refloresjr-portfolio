import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: "#3F51B5",
  },
  Navigation: {
    fontSize: "1rem",
    flexGrow: 1,
    "& .nav-toolbar": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .nav-menuButton": {
        "& .nav-menuIcon": {
          fontSize: "1.62em",
        },
        marginLeft: theme.spacing(1),
      },
      "& .nav-title": {
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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    "& .fp-spacer": {
      width: "45%",
    },
    "& .fp-image": {
      width: "100%",
      height: "inherit",
      opacity: ".5",
    },
    "& .fp-span-1, .fp-span-2": {
      textAlign: "center",
      color: "white",
      fontSize: "6.5em",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    "& .fp-span-1": {
      borderRight: "none",
    },
    "& .fp-span-2": {
      borderRight: "none",
    },
    "& .typewriter-anim": {},
  },
  AboutMe: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default useStyles;
