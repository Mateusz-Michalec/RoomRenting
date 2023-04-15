import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
