import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurant from "./pages/Restaurant";
import Add from "./pages/Add";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Route>
          <Route path="/" element={<Restaurant />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
