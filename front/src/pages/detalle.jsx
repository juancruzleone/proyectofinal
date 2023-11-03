import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const detalleProducto = () => {
  return (
    <Layout className={styles.app}>
        <div className={styles.contenedorDetalleProducto}>
            <div className={styles.contenedorProducto}>
                <Image
                    src={`/detecte-de-humo.png`}
                    alt= "Detector de humo"
                    width={150}
                    height={180}
                    className={styles.imagenProductoDetalle}
                />
            </div>
            <div className={styles.contenidoProducto}>
                <div className={styles.contenidoDetalle}>
                    <h3 className={styles.nombreProductoDetalle}>Nombre producto</h3>
                    <p>12000</p>
                    <a href="#">Agregar al carrito</a>
                </div>
                
            </div>
        </div>
        <div className={styles.contenedorDescripcionProducto}>
            <h4>Descripción</h4>
            <p>Detector de humo inteligente para hogares y oficinas.</p>
        </div>
        {/* Agregar carrousel de productos */}
      <Footer></Footer>
    </Layout>
  );
};

export default detalleProducto;