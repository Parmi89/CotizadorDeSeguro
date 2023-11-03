import React, { useEffect, useState } from "react";
import BtnVolver from "./BtnVolver";

function CotizacionGuardada() {
	const [cotizaciones, setCotizaciones] = useState([]);

	useEffect(() => {
		const cotizacionesGuardadas =
			JSON.parse(localStorage.getItem("cotizaciones")) || [];
		setCotizaciones(cotizacionesGuardadas);
	}, []);

	return (
		<div>
			<h1>Historial de Cotizaciones</h1>
            <table className="table">
  <thead>
    <tr>
      <th className="text-center">Lugar</th>
      <th className="text-center">% por ubicación </th>
      <th className="text-center">Total metros</th>
      <th className="text-center">Hogar tipo</th>
      <th className="text-center">% por tipo </th>
      <th className="text-center">Importe cotizacion</th>
    </tr>
  </thead>
  <tbody>
    {cotizaciones.map((cotizacion, index) => (
      <tr key={index}>
        <td className="text-center">{cotizacion.selectedData.ubicacionText}</td>
        <td className="text-center">{cotizacion.selectedData.ubicacion}</td>
        <td className="text-center">{cotizacion.selectedData.metrosCuadrados}</td>
        <td className="text-center">{cotizacion.selectedData.tipo}</td>
        <td className="text-center">{cotizacion.selectedData.factor}</td>
        <td className="text-center">$ {cotizacion.resultado.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>
<BtnVolver />
			
		</div>
	);
}

export default CotizacionGuardada;
