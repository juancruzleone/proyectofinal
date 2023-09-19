import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const certificaciones = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Certificaciones</h1>
      <div className={styles.contenedorCertificaciones}>
        
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default certificaciones;
