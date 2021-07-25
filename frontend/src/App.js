import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import MainForm from "./components/MainForm";

import { AnimatePresence } from "framer-motion";
import GroupInfo from "./components/GroupInfo";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={MainForm} />
          <Route path="/group" exact component={GroupInfo} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
