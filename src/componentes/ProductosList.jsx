import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ubicacion from "./Ubicacion";
import MetrosCuadrados from "./MetrosCuadrados";

function ProductosList() {
  const [propiedades, setPropiedades] = useState([]);
  const [selectedLink, setSelectedLink] = useState("");
  const [selectedUbicacion, setSelectedUbicacion] = useState("1.13");
  const [selectedMetrosCuadrados, setSelectedMetrosCuadrados] = useState("");
  const [selectedPropiedad, setSelectedPropiedad] = useState("Casa");
  const [selectedUbicacionText, setSelectedUbicacionText] = useState("CABA");
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const property = propiedades.find((propiedad) => propiedad.id === selectedValue);
    setSelectedPropiedad(property);
    const productLink = property
      ? `/${property.id}?ubicacion=${selectedUbicacion}&metrosCuadrados=${selectedMetrosCuadrados}`
      : "";

    setSelectedLink(productLink);
  };

  const handleUbicacionChange = (event) => {
    const selectedUbicacionValue = event.target.value;
    const selectedUbicacionText = event.target.options[event.target.selectedIndex].getAttribute('data-text'); 
    setSelectedUbicacion(selectedUbicacionValue);
    setSelectedUbicacionText(selectedUbicacionText); 
  };
  
  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((datos) => setPropiedades(datos));
  }, []);


  const handleMetrosCuadradosChange = (event) => {
    const selectedMetrosCuadrados = event.target.value;
    setShowAlert(false);
    setSelectedMetrosCuadrados(selectedMetrosCuadrados);
  };


  const selectedData = {
    ubicacion: selectedUbicacion, 
    ubicacionText: selectedUbicacionText, 
    metrosCuadrados: selectedMetrosCuadrados,
    tipo: selectedPropiedad?.tipo || "Casa",
    factor: selectedPropiedad?.factor || 1.09
  };

  function historial(event){
    if (selectedMetrosCuadrados==""){
      setShowAlert(true);
      event.preventDefault();
    }
  }
  

  return (
    <>
      <h1> Selecciona tu hogar!</h1>
      <div className="main">
      <select onChange={handleSelectChange}>
        {propiedades.map((propiedad) => (
          <option key={propiedad.id} value={propiedad.id}>
            {propiedad.tipo}
          </option>
        ))}
      </select>
      <h2> ¿Donde te encuentras?</h2>    
      <Ubicacion ubicacion={selectedUbicacion} onChange={handleUbicacionChange} />
      <h2> Ingresa los metros de tu hogar!</h2>
      <MetrosCuadrados metrosCuadrados={selectedMetrosCuadrados} onChange={handleMetrosCuadradosChange} />
      {showAlert && (
        <div className="alert">
          <strong>ATENCION!!! </strong>Debe ingresar los metros cuadrados !!!
        </div>
      )}
      <Link to={`${selectedLink}&ubicacion=${selectedUbicacion}&metrosCuadrados=${selectedMetrosCuadrados}`} state={{ selectedData }}>
      <button className="buttonCotizacion" onClick={historial}>Siguiente</button>
      </Link>
      <Link to="/mostrarcotizacion">
        <button className="buttonCotizacion"> Tu Historial</button>
      </Link>
      </div>
    </>
  );
}

export default ProductosList;
