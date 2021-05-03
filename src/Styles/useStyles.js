import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    Button: {
      "&:hover": {
        backgroundColor: "red",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "750px",
      width: "500px",
      overflowY: "auto",
      padding: "5%",
      borderRadius: "3%",
      backgroundImage: "linear-gradient(#7badb0, #bcbafc)",
      boxShadow: "1px 3px 8px 1px, -1px 2px 10px 2px",
    },
    textField: {
      margin: "10px 0px",
      borderRadius: "4px",
      "&:last-of-type": {
        marginBottom: "20px",
      },
    },
    text: {
      fontSize: "1rem",
      borderBottom: "1px solid black",
      marginBottom: "10px",
    },
    h3: {
      fontSize: "2rem",
      color: "#b0917b",
      textDecoration: "underline",
    },
    cta: {
      fontSize: "1rem",
    },
  },
  Navigation: {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  },
}));

export default useStyles;
