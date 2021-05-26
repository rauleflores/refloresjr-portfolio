import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  FormCard: {
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
    "& .button": {
      "&:hover": {
        backgroundColor: "red",
      },
    },
    "& .cta": {
      fontSize: "1rem",
    },
    "& .h3": {
      fontSize: "2rem",
      color: "#4974a5",
      textDecoration: "underline",
    },
    "& .text": {
      fontSize: "1rem",
      borderBottom: "1px solid black",
      marginBottom: "10px",
    },
    "& .textField": {
      margin: "10px 0px",
      borderRadius: "4px",
      "&:last-of-type": {
        marginBottom: "20px",
      },
    },
  },
  Navigation: {
    flexGrow: 1,
    "& .menuButton": {
      marginRight: theme.spacing(2),
    },
    "& .title": {
      flexGrow: 1,
    },
  },
  Splash: {
    display: "flex",
    flexDirection: "column",
    margin: "10%",
    "& .myName": {
      fontSize: "30px",
      color: "red",
    },
    "& .shortMessageDiv": {
      height: "50px",
      // width: "80%",
      backgroundColor: "black",
    },
    "& .shortMessage": {},
    "& .guestDiv": {},
    "& .h3Splash": {},
    "& .emailSplash": {},
    "& .guestEmail": {},
    "& .passwordSplash": {},
    "& .guestPassword": {},
  },
}));

export default useStyles;
