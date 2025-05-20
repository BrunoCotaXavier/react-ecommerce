import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Product from "./screens/products";
import Budget from "./screens/budget";
import Ecommerce from "./screens/ecommerce";
import Info from "./screens/info";
import Header from "./components/header";
import Bottom from "./components/bottom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" index element={<Home />} />
          <Route path="/produtos" element={<Product />} />
          <Route path="/como-funciona" element={<Info />} />
          <Route path="/orcamento" element={<Budget />} />
          <Route path="/loja-online" element={<Ecommerce />} />
        </Route>
      </Routes>
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
