import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { TypingPractice } from "./pages/TypingPractice";
import { TypingResults } from "./pages/TypingResults";

const routes = [
  { path: "/", component: Home, title: "home" },
  {
    path: "/TypingPractice",
    component: TypingPractice,
    title: "Start Practice",
  },
  {
    path: "/TypingResults",
    component: TypingResults,
    title: "See Results",
  },
];

export default function AppRoutes() {
  return (
    <Router>
      <ul className="navLinkContainer">
        {routes.map((route) => (
          <li>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
}
