import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const Provisiones = () => {
    return (
        <Layout>
            <h1 className={styles.tituloPaginas}>Provisiones</h1>
            <div className={styles.contenedorProivisiones}>
                <p></p>
            </div>
            <Footer></Footer>
        </Layout>
    )
}

export default Provisiones