import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEmployees from "./pages/AddEmployees";
import Employees from "./pages/Employees";
import ViewEmployee from "./pages/ViewEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/viewemployee/:id" element={<ViewEmployee />}></Route>
            <Route path="/addemployees" element={<AddEmployees />}></Route>
            <Route path="/addemployees/:id" element={<AddEmployees />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
