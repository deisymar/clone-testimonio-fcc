import "../Testimonio.css";
import React from "react";

function Testimonio(props) {
  let { nombre, pais, imagen, cargo, empresa, testimonio } = props;
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`../imagenes/testimonio-${imagen}.png`}
        alt={`Foto de ${imagen}`}
      />
      <div className="contenedor-text-textimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className="text-testimonio">"{testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
