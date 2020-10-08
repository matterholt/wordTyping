import React from "react";
import "./App.css";
import AppRoutes from "./routes";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <AppRoutes />
      <Button variant="contained" size="large" color="primary">
        Let Begin!
      </Button>
    </div>
  );
}

export default App;
