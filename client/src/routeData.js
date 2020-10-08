import { Home } from "./pages/Home";
import { TypingPractice } from "./pages/TypingPractice";
import { TypingResults } from "./pages/TypingResults";

export const routes = [
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
