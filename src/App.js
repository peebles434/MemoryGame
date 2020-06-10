import React from "react";
import { MemoryGame } from "./Components/MemoryGame";
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
      <MemoryGame />
    </ThemeProvider>
  );
}

export default App;
