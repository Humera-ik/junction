import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { Register } from "./Components/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
