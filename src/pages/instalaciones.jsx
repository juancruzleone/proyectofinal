import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Instalaciones = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Instalaciones</h1>
      <div className={styles.contenedorInstalaciones}>
        <p>Inelar realiza instalaciones</p>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Instalaciones;
