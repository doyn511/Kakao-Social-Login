import { Route, Routes } from "react-router-dom";
import "./App.css";
import Complete from "./components/Complete";
import Login from "./components/Login";
import Spinner from "./components/Spinner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loading" element={<Spinner />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;
