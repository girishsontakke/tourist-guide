import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.component";
import Header from "./components/header/header.component";
import signIn from "./components/signIn/signIn.component";
import SignUp from "./components/signUp/signUp.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={signIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
