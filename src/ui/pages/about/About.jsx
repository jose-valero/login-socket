import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container className='my-5'>
      <span>
        Challengue de la empresa Wispro para Frontend Developer, Inicio de la
        prueba tecnica 6/01/2021. dentro de la prueba tenemos que cumplir los
        siguientes requerimientos:
        <hr />
        <ul>
          <li>
            Hacer un formulario de registración de usuario con los atributos que
            desee
          </li>
          <li>
            Hacer un login para usuario, ya sea con email username, como
            prefieras.
          </li>
          <li>Listar, editar y borrar usuarios (estando logueado).</li>
          <li>
            Gráfico estático de cantidad de logueos por dia del ultimo mes.
          </li>
          <li>
            Realizar un gráfico con cantidad de usuarios registrados por día en
            el último mes (fakear/mockear los datos) utilizando websockets. (No
            es obligatorio, pero es deseable el uso de websockets)
          </li>
          <li>
            Integrar bootstrap o alguna librería front-end para los estilos
          </li>
        </ul>
      </span>
    </Container>
  );
};

export default About;
