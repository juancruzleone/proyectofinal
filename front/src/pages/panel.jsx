import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import Carrousel from "@/components/Carrousel";
import PanelNav from "@/components/navpanel";
import styles from "@/styles/Home.module.css";




const panelAdmin = () => {
  return (
    <Layout className={styles.app}>
        <h1 className={styles.tituloPaginas}>Panel admin</h1>
        <div className={styles.contenedorPanelAdmin}>
          <div className={styles.posicionMenuPanel}>
          <PanelNav/> 
          </div>
           
            <div className={styles.contenedorContenidoPanel}>
                <div className={styles.contenidoPanel}>
                     {/* Aca iria el contenido de la solapa del panel que se toque */}
                </div>       
            </div>
        </div>
      <Footer></Footer>
    </Layout>
  );
};

export default panelAdmin;
