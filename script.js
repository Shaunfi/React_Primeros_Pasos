/* Conceptos Importantes:

        Componente ---------------- > Parte del interfaz de usuario, lo que es visible, por asi decir bloques de HTML.
        Props --------------------- > Son propiedades que pueden ser enviados de un componente padre a un hijo (no a la inversa).
        render() ------------------ > Es todo lo que se va a mostrar al usuario.
        extends React.Component --- > Extiende la funcionalidad de JS para hacerlo un componente de React.
        Elemento JSX -------------- > Es la fusion de HTML y JS. Como en linea 20.
        Estado -------------------- > Es el conjunto de propiedades y valores de un componente. Como por asi decirlo los class="" o type="".
        Hooks --------------------- > Facilita el uso y manipulacion de estados de componentes funcionales y otros aspectos de React.
        Event Listener ------------ > Es un evento especifico que ocurre como hover, focus, etc.
        Self-Closing Tag ---------- > Es una etiqueta que se cierra automaticamente <example/>.

*/


import ReactDOM from 'react-dom';

class Saludo extends React.Component {
    render() {
        return <h1>Hola, {this.props.nombre}.</h1>
    }
}


const elemento = <h1>Hola, Mundo</h1>

ReactDOM.render(
    elemento,
    document.getElementsById('root')
) // Renderiza el elemento a mostrar.
