import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
  card_text: {
    fontSize: "1rem",
    borderBottom: "1px solid black",
    marginBottom: "10px",
  },
  card_h3: {
    fontSize: "2rem",
    color: "#b0917b",
    textDecoration: "underline",
  },
  card_cta: {
    fontSize: "1rem",
  },
});

export default useStyles;
