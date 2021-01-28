import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.component";
import Header from "./components/header/header.component";
import signIn from "./pages/signIn/signIn.component";
import SignUp from "./pages/signUp/signUp.component";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={signIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <CssBaseline />
    </>
  );
}

export default App;
