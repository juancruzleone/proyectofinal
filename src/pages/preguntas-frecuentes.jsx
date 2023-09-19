import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const preguntasFrecuentes = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Preguntas frecuentes</h1>
      <div className={styles.posicionPreguntasFrecuentes}>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 1</h2>
        </div>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 2</h2>
        </div>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 3</h2>
        </div>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 4</h2>
        </div>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 5</h2>
        </div>
        <div className={styles.contenedorPreguntasFrecuentes}>
          <h2>Pregunta 6</h2>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default preguntasFrecuentes;
