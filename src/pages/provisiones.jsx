import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Provisiones = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Provisiones</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoServicios}>En Inelar, sabemos que el éxito de cualquier proyecto depende de los recursos adecuados. Ofrecemos provisiones tecnológicas de primera calidad para garantizar que tengas todo lo que necesitas para llevar a cabo tu proyecto con éxito.</p><br />
        <p className={styles.textoServicios}>¿Necesitas provisiones tecnológicas? Explora nuestra amplia gama de recursos y herramientas, desde hardware hasta software personalizado. Cuéntanos tus necesidades y te proporcionaremos las provisiones adecuadas para hacer realidad tu visión.</p> className={styles.textoServicios}
      </div>
      <a className={styles.botonSolicitarServicio}>Solicitar Provisiones</a>
      <Footer></Footer>
    </Layout>
  );
};

export default Provisiones;
