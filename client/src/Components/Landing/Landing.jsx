import React from "react";
import styles from './Landing.module.css';
import {Link} from "react-router-dom";

export default function Landing(){
  return (
  <div className={styles.background}>
    <div className={styles.intro}>
      <h2>Bienvenido al PI de Videogames</h2>
      <br />
      <h3>Esta página es un proyecto individual creado para el bootcamp 'SoyHenry'. Es una biblioteca de videojuegos y utiliza una API llamada <Link to="https://rawg.io/apidocs" target="_blank">Rawg</Link>,
      además, también es posible agregar nuevos videojuegos a través de un formulario; estos se guardarán en la base de datos.</h3>
      <br />
      <h3>Presiona el botón "Start" para acceder a la página.</h3>
    </div>

    <Link to="/home">
      <button className={styles.btn}>Start</button>
    </Link>

    <section className={styles.technologies}>
      <br />
      <div className={styles["technology-icons"]}>
        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="JavaScript" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png" alt="React" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png" alt="Redux" />
        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png" alt="Sequelize" />
        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" alt="HTML" />
        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="CSS" />
        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png" alt="Node.js" />
        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sql_icon_130152.png" alt="SQL" />
      </div>
    </section>
  </div>
    )
}