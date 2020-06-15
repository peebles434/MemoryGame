import React from "react";
import { MemoryGameApp } from "./Components/MemoryGameApp";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MemoryGameApp />
    </ThemeProvider>
  );
}

export default App;
