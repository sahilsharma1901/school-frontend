import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import Classes from "../../components/Classes/Classes";
import Teachers from "../../components/Teachers/Teachers";
import styles from "./Dashboard.module.css";

const DefaultDashboard = () => {
    return (
        <div style={{display: 'grid', placeItems: 'center', width: "100%", height: "100%"}}>
          <h1 style={{color: "#237f96"}}>Welcome, Admin</h1>
        </div>
    );
}

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sideBar}>
          <NavLink to="/dashboard/classes" activeClassName={styles.active}>Classes</NavLink>
          <NavLink to="/dashboard/teachers" activeClassName={styles.active}>Teachers</NavLink>
      </div>
      <div className={styles.infoContainer}>
        <Switch>
            <Route path="/dashboard" exact>
                <DefaultDashboard/>
            </Route>
          <Route path="/dashboard/classes">
            <Classes />
          </Route>
          <Route path="/dashboard/teachers">
            <Teachers />
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
