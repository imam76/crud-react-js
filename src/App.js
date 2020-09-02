import React, { useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
// import { ModalContainer, ModalRoute } from "react-router-modal";

// page
import Home from "./Page/Home";
import UpdatePage from "./Page/UpdatePage"
import DialogEditUsers from "./Page/Component/DialogEditUsers";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  // console.log(background, location);
  return (
    <div className="container">
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route path="/update-page/:id" component={UpdatePage} />
        <Route>not found</Route>
      </Switch>
      {background && <Route path="/edit/:id" component={DialogEditUsers} />}
    </div>
  );
}

export default App;
