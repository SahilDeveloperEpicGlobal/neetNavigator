import logo from "./logo.svg";
import "./App.css";
import { Switch } from "@mui/material";

function App() {
  const label = "";
  return (
    <div className="App">
      <h2>Landing Page</h2>
      <Switch {...label} defaultChecked />
    </div>
  );
}

export default App;
