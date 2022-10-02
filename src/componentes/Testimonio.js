import "../Testimonio.css";
import React from "react";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`../imagenes/testimonio-${props.imagen}.png`}
        alt="Foto de perfil"
      />
      <div className="contenedor-text-textimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="text-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
