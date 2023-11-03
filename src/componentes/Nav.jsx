import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li>
          <Link to="/cotizar">Cotizar</Link>
        </li>
        <li>
          <Link to="/mostrarcotizacion">mostrar-cotizacion</Link>
        </li>
        <li>
          <Link to="/Volver">Volver</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
