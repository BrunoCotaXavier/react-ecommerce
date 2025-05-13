import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Product from "./screens/products";
import Budget from "./screens/budget";
import Ecommerce from "./screens/ecommerce";
import Info from "./screens/info";
import Layout from "./Layout";
import "./styles/global.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Product />} />
          <Route path="como-funciona" element={<Info />} />
          <Route path="orcamento" element={<Budget />} />
          <Route path="loja-online" element={<Ecommerce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
