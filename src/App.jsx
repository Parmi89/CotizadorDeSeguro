import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import NotFound from "./componentes/NotFound";
import ProductosList from "./componentes/ProductosList";
import ProductosDetail from "./componentes/ProductoDetail";
import CotizarPoliza from "./componentes/CotizarPoliza";
import CotizacionGuardada from "./componentes/CotizacionGuardada.jsx";
import BtnVolver from "./componentes/BtnVolver"

function App() {
  return (
    <>
      <Header titulo="Cotiza el seguros de tu casa " />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductosList />} />
            <Route path=":id" element={<ProductosDetail />} />
            <Route path="/cotizar" element={<CotizarPoliza />} />
            <Route path="/mostrarcotizacion" element={<CotizacionGuardada />} />
            <Route path="/volver" element={<BtnVolver />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;