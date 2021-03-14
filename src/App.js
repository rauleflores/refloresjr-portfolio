import "./Styles/App.css";
import Splash from "./Components/Splash";
import SignUp from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import { Route, Switch } from "react-router-dom";

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
