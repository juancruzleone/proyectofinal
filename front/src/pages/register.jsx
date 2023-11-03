import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";




const Login = () => {
  return (
    <Layout className={styles.app}>
        <h1 className={styles.tituloPaginas}>Registrate</h1>
        <form action="" className={styles.form}>
            <label htmlFor="" className={styles.formLabel} >Crea nombre de suario</label>
            <input type="usuario" id={styles.primerInput} name="usuario" className={styles.formControl}/>
            <label htmlFor="" className={styles.formLabel}>Crea la contraseña</label>
            <input type="contraseña" id="contraseña" name="contraseña" className={styles.formControl}/>
            <button type="submit" id={styles.botonLogin}>Registrate</button>
        </form>
      <Footer></Footer>
    </Layout>
  );
};

export default Login;
