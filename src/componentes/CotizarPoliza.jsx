import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BtnVolver from "./BtnVolver";

function CotizarPoliza() {
  const location = useLocation();
  const selectedData = location.state.selectedData;
  let valorMetroCuadrado = 35.86;
  let resultado = valorMetroCuadrado * selectedData.factor * selectedData.ubicacion * selectedData.metrosCuadrados;

  const cotizacionObj = {
    selectedData: selectedData,
    resultado: resultado,
  };

  const [cotizacionGuardada, setCotizacionGuardada] = useState(false);

  useEffect(() => {
    const cotizacionesAnteriores = JSON.parse(localStorage.getItem("cotizaciones")) || [];

    // Verificar si la cotización ya se ha guardado
    const cotizacionYaGuardada = cotizacionesAnteriores.some((cotizacion) => {
      return JSON.stringify(cotizacion) === JSON.stringify(cotizacionObj);
    });

    if (!cotizacionYaGuardada) {
      cotizacionesAnteriores.push(cotizacionObj);
      localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesAnteriores));
      setCotizacionGuardada(true);
    }
  }, []);

  return (
    <div className="main">
    <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th className="text-center">Ubicacion</th>
            <th className="text-center"> % por zona</th>
            <th className="text-center">Tipo hogar</th>
            <th className="text-center">% por tipo</th>
            <th className="text-center">Metros</th>
            <th className="text-center">Total</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">{selectedData.ubicacionText}</td>
            <td className="text-center">{selectedData.ubicacion}</td>
            <td className="text-center">{selectedData.tipo}</td>
            <td className="text-center">{selectedData.factor}</td>
            <td className="text-center">{selectedData.metrosCuadrados}</td>
            <td className="text-center">$ {cotizacionObj.resultado.toFixed(2)}</td>
            <td className="text-center"><p>Podras ver tus cotizaciones en<br></br> <strong>"Tu historial"</strong></p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Total $ {cotizacionObj.resultado.toFixed(2)}</h2>
      <BtnVolver />
    </div>
  );
}

export default CotizarPoliza;
