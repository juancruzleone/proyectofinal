import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const prelogin = () => {
  return (
    <Layout className={styles.app}>
        <div className={styles.contenedorPrelogin}>
            <div className={styles.formularioPrelogin}>
                <h1 className={styles.tituloPrelogin}>Inicia sesión en tu cuenta</h1>
                <form action="" className={styles.form}>
                    <label htmlFor="" className={styles.formLabel}>Usuario</label>
                    <input type="usuario" id={styles.primerInput} name="usuario" className={styles.formControl}/>
                    <label htmlFor="" className={styles.formLabel}>Contraseña</label>
                    <input type="contraseña" id="contraseña" name="contraseña" className={styles.formControl}/>
                    <button type="submit" id={styles.botonLogin}>Inicia sesión</button>
                </form>
            </div>

        </div>
      
      <Footer></Footer>
    </Layout>
  );
};

export default prelogin;