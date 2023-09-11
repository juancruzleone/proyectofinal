import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const Productos = () => {
    return (
        <Layout>
            <h1 className={styles.tituloPaginas}>Productos</h1>
            <div className={styles.posicionSeccionProductos}>
                <div className={styles.contenedorCategorias}>
                    {/* Se pueden usar otras categorias (detectores, extintores, mangueras, camaras, centrales) */}
                    <a href="#">Detección</a>
                    <a href="#">Extinción</a>
                </div>
                <div className={styles.contenedorProductos}></div>
            </div>
            <Footer></Footer>
        </Layout>
    )
}

export default Productos