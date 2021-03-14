import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Splash from "./Components/Splash";
import SignUp from "./Components/SignUpForm";

function App() {
  return (
    <Route path="/">
      <div className="App">
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
  );
}

export default App;
