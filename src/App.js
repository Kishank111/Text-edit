import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const modeEdit = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("You enabled light mode.");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("You enabled dark mode.");
    }
  };

  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const [alert, setAlert] = useState("");
  return (
    <Router>
      <Navbar modeEdited={modeEdit} mode={mode} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Alert alert={alert} />
              <TextBox setAlert={showAlert} heading="Type Here" mode={mode} />
            </>
          }
        ></Route>
        <Route path="/about" element={<About mode = {mode}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
