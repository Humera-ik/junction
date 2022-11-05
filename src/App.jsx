import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { RegisterPage } from "./Components/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
