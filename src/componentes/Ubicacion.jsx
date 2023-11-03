function Ubicacion(props) {
  const ubicaciones = [
    { key: "1", value: "1.13", text: "Caba" },
    { key: "2", value: "1.04", text: "Cordoba" },
    { key: "3", value: "1.29", text: "Tucuman" },
    { key: "4", value: "1.00", text: "Salta" },
  ];

  return (
    <select
      value={props.ubicacion}
      onChange={props.onChange}
    >
      {ubicaciones.map((ubicacion) => (
        <option
          key={ubicacion.key}
          value={ubicacion.value}
          data-text={ubicacion.text}
        >
          {ubicacion.text}
        </option>
      ))}
    </select>
  );
}

export default Ubicacion;
