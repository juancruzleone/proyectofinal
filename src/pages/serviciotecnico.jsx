import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const servicioTecnico = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Servicio técnico</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoServicios}>En Inelar, estamos comprometidos a brindar un servicio técnico excepcional. Nuestro equipo de soporte está disponible para atender tus necesidades tecnológicas en cualquier momento que surja un problema. Ya sea un pequeño contratiempo o una pregunta importante, estamos aquí para ayudarte.</p><br />
        <p className={styles.textoServicios}>¿Necesitas asistencia técnica? No dudes en ponerte en contacto con nuestro equipo de servicio técnico. Estamos a tu disposición para resolver cualquier problema y mantener tus operaciones sin problemas.</p> 
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default servicioTecnico;
