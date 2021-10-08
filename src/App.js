import Todo from "./Component/Todo";
import { Route, Switch } from "react-router";
import Model from "./Component/Model";
import Backdrop from "./Component/Backdrop";
import AllMeetup from "./Pages/AllMeetup";
import Favorite from "./Pages/Favorite";
import NewMeetup from "./Pages/NewMeetup";
import Layout from "./Navigation/Layout";
import { useState } from "react";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetup />
          </Route>
          <Route path="/NewMeetup" exact>
            <NewMeetup />
          </Route>
          <Route path="/Favorite" exact>
            <Favorite />
          </Route>
        </Switch>
      </Layout>
    </div>
    // <div>
    //   <Todo Text="Learn ReactJS" />
    //   <Todo Name="Rohit Bagwe" />
    // </div>
  );
}

export default App;
