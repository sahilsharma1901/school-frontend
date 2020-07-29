import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ClassStudents from "./components/ClassStudents/ClassStudents";
import AddStudent from "./components/AddStudent/AddStudent";
import UpdateStudent from "./components/UpdateStudent/UpdateStudent";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/classes/:classnumber">
          <ClassStudents />
        </Route>
        <Route path="/addstudent/:classnumber">
          <AddStudent />
        </Route>
        <Route path="/updatestudent/:id">
          <UpdateStudent />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
