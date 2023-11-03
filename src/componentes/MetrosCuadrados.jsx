import React from "react";

function MetrosCuadrados(props) {
  return (
    <input
      type="number"
      id="metros2"
      value={props.metrosCuadrados}
      min="20"
      max="500"
      onChange={props.onChange}
      required
    />
  );
}

export default MetrosCuadrados;

