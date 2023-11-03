

import { useLocation, Link } from "react-router-dom";
import BtnVolver from "./BtnVolver";

function ProductosDetail() {
  const location = useLocation();
  const selectedData = location.state.selectedData;



  return (
    <div className="main">
    <table className="table table-striped table-hover table-responsive">
  <thead>
    <tr>
      <th className="text-center">Ubicación</th>
      <th className="text-center"> % por zona</th>
      <th className="text-center">Tipo</th>
      <th className="text-center">% por tipo</th>
      <th className="text-center">Metros</th>
      <th className="text-center"></th>
    </tr>
  </thead>
  <tbody>
  {selectedData && (
<tr>
        <td className="text-center">{selectedData.ubicacionText}</td>
        <td className="text-center">{selectedData.ubicacion}</td>
        <td className="text-center">{selectedData.tipo}</td>
        <td className="text-center">{selectedData.factor}</td>
        <td className="text-center">{selectedData.metrosCuadrados}</td>
        <td className="text-center">
        <Link to="/cotizar" state={{ selectedData }}>

  <button className="buttonCotizacion">
    Cotizar
  </button>
</Link></td>
      </tr>

      )}
  </tbody>
</table>


<BtnVolver />

</div>
        
  );
}

export default ProductosDetail;
