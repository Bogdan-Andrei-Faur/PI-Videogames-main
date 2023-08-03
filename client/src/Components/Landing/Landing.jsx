import React from "react";
import styles from './Landing.module.css';

export default function Landing(){
    return (
        <div className={styles.landingPage}>
      <header className={styles.header}>
        <h1>VideoGames PI</h1>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles['hero-content']}>
            <h2>Bienvenido al PI de Videogames</h2>
            <a href="/home" className={styles.btn}>Home</a>
          </div>
        </section>
        <section className={styles.technologies}>
          <div className={styles['technology-icons']}>
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
      </main>
    </div>
    )
}