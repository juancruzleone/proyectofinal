import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const Servicios = () => {
    return (
        <Layout>
            <h1 className={styles.tituloPaginas}>Servicios</h1>
            {/*No se si va este texto (h2)*/}
            <h2 className={styles.subtituloServicio}>Los servicios se brindan en toda la Argentina</h2> 
            <div className={styles.contenedorCardServicios}>
                <div className={styles.cardServicios}>
                    <img src="/instalaciones.png" alt="icono instalaciones" className={styles.iconoServiciosCard}/>
                    <h3 className={styles.tituloCardServicio}>Instalaciones</h3>
                    <p className={styles.descripciónServicio}></p>
                    <a href="/instalaciones" className={styles.botonCardServicio}>Ver más</a>
                </div>
                <div className={styles.cardServicios}>
                    <img src="/mantenimiento.png" alt="icono mantenimiento" className={styles.iconoServiciosCard}/>
                    <h3 className={styles.tituloCardServicio}>Mantenimientos</h3>
                    <p className={styles.descripciónServicio}></p>
                    <a href="/mantenimientos" className={styles.botonCardServicio}>Ver más</a>
                </div>
                <div className={styles.cardServicios}>
                    <img src="/servicio-tecnico.png" alt="icono servicio tecnico" className={styles.iconoServiciosCard}/>
                    <h3 className={styles.tituloCardServicio}>Servicio técnico</h3>
                    <p className={styles.descripciónServicio}></p>
                    <a href="/serviciotecnico" className={styles.botonCardServicio}>Ver más</a>
                </div>
                <div className={styles.cardServicios}>
                    <img src="/provisiones.png" alt="icono provisiones" className={styles.iconoServiciosCard}/>
                    <h3 className={styles.tituloCardServicio}>Provisiones</h3>
                    <p className={styles.descripciónServicio}></p>
                    <a href="/provisiones" className={styles.botonCardServicio}>Ver más</a>
                </div>
            </div>
            <Footer></Footer>
            {/* Ver si es mejor cargar todo el contenido en array y despues recorrerlo */}
        </Layout>
      

     
    )
}

export default Servicios