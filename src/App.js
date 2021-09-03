import { Redirect, Route, Switch } from "react-router-dom";
import NoMatch from "./util/NoMatch";
import NavBar from "./Components/NavBar";
import FrontPage from "./Components/FrontPage";
import useStyles from "./Styles/useStyles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Redirect exact from="/" to="/home" />
      <Switch>
        <Route exact path="/home">
          <NavBar />
          <FrontPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
