import "./Styles/App.css";
import NoMatch from "./util/NoMatch";
import NavBar from "./Components/NavBar";
import Splash from "./Components/Splash";
import SignUp from "./Components/SignUpForm";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/home">
          <div className="FrontPage">
            <div className="left-side">
              <Splash />
            </div>
            <div className="right-side">
              <Route path="/home/signup">
                <SignUp />
              </Route>
              <Route path="/home/login">
                <LoginForm />
              </Route>
            </div>
          </div>
        </Route>
        <Route exact path="/dashboard">
          <NavBar />
          <Dashboard />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
