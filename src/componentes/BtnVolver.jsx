import React from "react";
import { Link } from "react-router-dom";

function BtnVolver() {
  return (
    <div className="main">
      <Link to="/">
      <button className="buttonCotizacion">
	Volver
</button>
      </Link>
    </div>
  );
}
export default BtnVolver;