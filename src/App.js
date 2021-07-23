import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Profile} />
          {/* <Route path="/reg" exact component={Registration} /> */}
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
