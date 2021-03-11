import "./App.css";
import LoginForm from "./Components/LoginForm";
import Splash from "./Components/Splash";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Splash />
        </div>
        <div>
          <LoginForm />
        </div>
      </header>
    </div>
  );
}

export default App;
