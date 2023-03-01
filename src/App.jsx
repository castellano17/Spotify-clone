import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedLogged from "./components/App/ProtectedLogged";
import ProtectedLogOut from "./components/App/ProtectedLogOut";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedLogged />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<ProtectedLogOut />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
