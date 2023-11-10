import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const carrito = () => {
  return (
    <Layout className={styles.app}>
      <h1 className={styles.tituloPaginas}>Carrito</h1>
      <div className={styles.contenedorSeccionCarrito}>
        <div className={styles.contenedorCarrito}>
          <h3>Productos en el carrito</h3>
        
        </div>
        <Link href="" className={styles.botonIrCheckout}>Proceder al checkout</Link>
      </div>
      
      <Footer></Footer>
    </Layout>
  );
};

export default carrito;