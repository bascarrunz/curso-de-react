import React from "react";

const LandingPage = () => {
  return (
    <div className="container">
      <h1 className="title">Módulo 7: DESARROLLO FRONTEND DE CON REACTJS</h1>
      <div className="section">
        <h2>Bienvenido</h2>
        <div className="divider"></div>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo
          la creación de <strong>componentes</strong>, el manejo de{" "}
          <strong>Hooks</strong>, y el uso de <strong>Redux.</strong>
        </p>
      </div>
      <div className="section">
        <h2>Temas Cubiertos</h2>
        <div className="divider"></div>
        <table className="table">
          <tbody>
            <tr>
              <td>Componentes funcionales y de clase</td>
              <td>
                Uso de <strong>React Hooks</strong> como useState y useEffect
              </td>
              <td>
                Creación de <strong>custom hooks</strong> como useForm
              </td>
              <td>
                Gestión de variables de estado con <strong>useState</strong>
              </td>
              <td>
                Gestión de estado global con <strong>Redux</strong>
              </td>
              <td>
                Integración de <strong>Redux</strong> con <strong>React</strong>
              </td>
              <td>
                Manejo de formularios en <strong>React.</strong>
              </td>
              <td>
                Publicando nuestra página con<strong> Git Hub Pages</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2>Recursos Adicionales</h2>
        <div className="divider"></div>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes
          recursos:
        </p>
      </div>
      <br />
      <div className="footer">
      <div className="divider"></div>
      <div>© 2024 Módulo 7. USIP</div>
      </div>

    </div>
  );
};

export default LandingPage;
