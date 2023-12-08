import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const certificaciones = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Certificaciones</h1>
      <p className={styles.subtituloCertificaciones}>
        Licencias nacionales e internacionales
      </p>
      <div className={styles.posicionContenedorCertificaciones}>
        <div className={styles.contenedorCertificaciones}>
          <Image
            src="/logo-iram.webp"
            alt="Logo certificación iram"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.contenedorCertificaciones}>
          <Image
            src="/logo-nfpa.webp"
            alt="Logo certificación nfpa"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.contenedorCertificaciones}>
          <Image
            src="/logo-3.webp"
            alt="Logo certificación cemera"
            className={styles.celularImagen}
            width={150}
            height={150}
          />
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  );
};

export default certificaciones;
