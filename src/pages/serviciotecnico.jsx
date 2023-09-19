import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const servicioTecnico = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Servicio técnico</h1>
      <div className={styles.contenedorServicioTecnico}>
        
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default servicioTecnico;
