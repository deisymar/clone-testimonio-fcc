import "./App.css";
import Testimonio from "./componentes/Testimonio";
//import Text from "react-native";

let userTestimonios = [
  {
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "shawn",
    cargo: "Ingeniero de software",
    empresa: "Amazon",
    testimonio:
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. " +
      "<B>freeCodeCamp cambió mi vida.</B>"
  },
  {
    nombre: "Sara Chima",
    pais: "Nigeria",
    imagen: "sara",
    cargo: "Ingeniero de software",
    empresa: "ChatDesk",
    testimonio:
      "<B>freeCodeCamp fue la puerta de entrada a mi carrera</B> " +
      "como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
  },
  {
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "emma",
    cargo: "Ingeniera de Software",
    empresa: "Spotify",
    testimonio:
      "Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en " +
      "<B>freeCodeCamp me dio las habilidades</B>" +
      " y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify."
  }
];

export default function App() {
  /*const B = (props) => {
    return <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;
  };
*/
  const getTexto = (testdata) => {
    console.log(testdata);
    /*let regex = RegExp(/[<B>][</B>$]/);
    let cadenas = testdata.split(regex);
    
    const cadtexto = cadenas
      .filter((data) => data.indexOf(">freecodecamp"))
      .map((dataTexto, d) => (
        <Text key={d} style={{ fontWeight: "bold" }}>
          {dataTexto}
        </Text>
      ));
    return cadtexto;*/
    return testdata;
  };

  const getTestimonio = userTestimonios.map((data, d) => (
    <Testimonio
      key={d}
      nombre={data.nombre}
      pais={data.pais}
      imagen={data.imagen}
      cargo={data.cargo}
      empresa={data.empresa}
      testimonio={getTexto(data.testimonio)}
    />
  ));
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {getTestimonio}
      </div>
    </div>
  );
}
