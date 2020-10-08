import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { routes } from "./routeData";

const FullNav = ({ routes }) => {
  // full nav for the site, not implemented
  return (
    <ul className="navLinkContainer">
      {routes.map((route) => (
        <li>
          <Link to={route.path}>{route.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default function AppRoutes({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
}
