import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Mantenimientos = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Mantenimientos</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoServicios}>Inelar presta servicios de mantenimientos a todos los clientes que lo deseen. Contamos con equipo de ultima técnologia para llevar a cabo los mantenimiento y  un personal de técnios especializados para su realización</p><br />
        <p className={styles.textoServicios}>Disponemos de una APP, que es utilizada por nuestros técnicos para optimizar la realización de los mantenimientos y llevar un registro de los mantenimientos realizados. También puede ser usada por nuestro clientes para arreglar posibles fallas de los dispositivos en caso de que no pueda contactar con un técnico</p><br />
        <p>Trabajando con Inelar, </p>
      </div>
      <div className={styles.contenedorControlMantenimiento}>
        <h2>Control</h2>
        <p className={styles.textoServicios}>Se lleva a cabó un mantenimiento después de, </p>
      </div>
    
      <Footer></Footer>
    </Layout>
  );
};

export default Mantenimientos;
