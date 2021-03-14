import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
    "&:last-of-type": {
      marginBottom: "20px",
    },
    margin: "10px 0px",
    borderRadius: "4px",
  },
  login_cta: {
    fontSize: "1.1rem",
  },
  signup_cta: {
    fontSize: "1.1rem",
  },
  signup_text: {
    fontSize: "1rem",
    borderBottom: "1px solid black",
    marginBottom: "10px",
  },
  h3: {
    fontSize: "2rem",
  },
});

export default useStyles;
