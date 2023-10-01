import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Instalaciones = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Instalaciones</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoServicios}>En Inelar, comprendemos la importancia de la implementación de dispositivos de manera eficiente y efectiva. Nuestro equipo especializado está dedicado a garantizar que tus dispositivos se instalen de manera óptima y funcionen sin problemas desde el primer momento.</p><br />
        <p className={styles.textoServicios}>Ya sea que necesites implementar una nueva infraestructura tecnológica o desees mejorar la configuración de dispositivos existentes, estamos aquí para ayudarte. Nuestras instalaciones de dispositivos están diseñadas para garantizar que tu tecnología funcione a la perfección.</p>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Instalaciones;
