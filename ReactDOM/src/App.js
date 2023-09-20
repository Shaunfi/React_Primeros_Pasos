import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto son los alumnos y profesores de la UTN</h1>
        <Testimonio 
          nombre = 'Benjamin Mansilla'
          pais = 'Argentina'
          cargo = 'ExVendedor de Droga'
          lugar = 'Cordoba'
          testimonio = 'Es un negro de mierda que se dedica a vender droga a amigo, familiares y gente desconocida. Si estas leyendo esto me parece impresionante la forma en la que estas al pedo negro de re mierda anda a estudiar Python. Jugador del kuboom con promedio 2 de k/m y alcanzo mas de una vez las 6000 copas en el clash royale. Va recursando AED un segundo año y sus amigos lo alientan a un tercer año en AED.'
          imagen = 'f1'
          alt = 'Foto Benja'
         />
        <Testimonio 
          nombre = 'Valerio Fritelli'
          pais = 'Forrolandia'
          cargo = 'Jefe de Catedra'
          lugar = 'AED'
          testimonio = 'Es la persona mas hija de puta que vas a conocer en tu vida, si fuera por el haria que todos los alumnos que quieren ser ing. en sistemas se lleven esta materia hasta 2050 para el seguir trabajando como un negro de mierda esclavo de la vida. Y si sos de su comision que se entra por un sorteo en donde depositas 10.000 pesos en su PayPal, tenes la posibilidad de aprobar AED y recibirte de ing. en sistema.'
          imagen = 'f3'
          alt = 'Foto Valerio'
         />
        <Testimonio 
          nombre = 'Sergio Francisco Zaninetti'
          pais = 'Argentina'
          cargo = 'Jefe de Catedra'
          lugar = 'Ingles'
          testimonio = 'Este forro es lo mismo que Valerio Fritelli pero version in english please. Benjamin Mansilla lo odia hasta la muerte asi que apenas apruebe Ingles 1 y 2, va ir a pincharle todas las ruedas del auto a este forro y la puta que lo re pario.'
          imagen = 'f2'
          alt = 'Foto Sergio'
         />
      </div>
    </div>
  );
}

export default App;
