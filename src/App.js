import React from "react";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Register from "./Component/Register";
import Logout from "./Component/Logout";
import Protected from "./Component/Protected";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/home'>
          <Protected cmp={Home}/>
        </Route>
        <Route exact path="/register" component={Register} />        
        <Route path="/logout" component={Logout} />        

      </Switch>
    </div>
  );
};

export default App;