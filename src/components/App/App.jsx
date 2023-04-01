import { Routes, Route } from "react-router-dom";
import FormPage from "../../pages/FormPage/formPage";
import ProductPage from "../../pages/ProductPage/productPage";
import Nav from "../Nav/nav";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
