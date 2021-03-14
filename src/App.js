import "./Styles/App.css";
import NoMatch from "./NoMatch";
import Splash from "./Components/Splash";
import SignUp from "./Components/SignUpForm";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="FrontPage">
            <div className="left-side">
              <Splash />
            </div>
            <div className="right-side">
              <Switch>
                <Route path="/signup-page">
                  <SignUp />
                </Route>
                <Route path="/login-page">
                  <LoginForm />
                </Route>
              </Switch>
            </div>
          </div>
        </Route>
        <Route path="/dashboard">
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
