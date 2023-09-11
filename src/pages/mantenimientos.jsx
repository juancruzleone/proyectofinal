import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const Mantenimientos = () => {
    return (
        <Layout>
            <h1 className={styles.tituloPaginas}>Mantenimientos</h1>
            <div className={styles.ContenedorMantenimientos}>
                <p></p>
            </div>
            <Footer></Footer>
        </Layout>
    )
}

export default Mantenimientos