import react from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Error from "./Error";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
