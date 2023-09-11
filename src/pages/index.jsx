import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'



const Home = () => {
    return (
        <Layout>
            {/*Ordenar mejor el codigo de nuestra App, para que el titulo quede en el mismo contenedor que el parrafo y haga display flex con el circulo y la imagen*/}
            <h1 className={styles.tituloHome}>INELAR</h1>
            <h2 className={styles.subtituloApp}>Nuestra APP</h2>
            <div className={styles.contenedorNuestraApp}>
                <div className={styles.circulo}>
                    <div className={styles.celularApp}>
                        <img src="/app.png" alt="mockup app mobile inelar" className={styles.celularImagen} />
                    </div>
                </div>
                <div className={styles.contenedorTextoNuestraApp}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem augue, auctor a iaculis quis, scelerisque ac turpis. Sed sagittis libero non mauris placerat ullamcorper. Integer sodales urna eu nibh molestie viverra. Etiam volutpat facilisis arcu nec pellentesque. Praesent eget nisi sed ligula laoreet fermentum. Sed sed congue leo. Nullam malesuada nulla sapien, vitae gravida quams efficitur id. In finibus scelerisque nulla, et suscipit lorem sollicitudin non. Nunc pulvinar porttitor luctus. Suspendisse ultrices ex quis tortor luctus vestibulum. Quisque egestas nulla in quam sollicitudin, quis auctor libero luctus.</p>
                </div>
            </div>


            <div className={styles.contenedorServicios}>
                <h2 className={styles.subtituloServicios}>Servicios</h2>
                <div className={styles.posicionServicios}>
                    <div className={styles.cajaServicios}>
                        <h3 className={styles.nombreServicios}>Instalaciones</h3>
                        <a href="/instalaciones">
                            <img src="/instalaciones.png" alt="icono detector" className={styles.iconoServicios}/>
                        </a>      
                    </div>
                    <div className={styles.cajaServicios}>
                        <h3 className={styles.nombreServicios}>Mantenimientos</h3>
                        <a href="/mantenimientos">
                            <img src="/mantenimiento.png" alt="icono mantenimientos" className={styles.iconoServicios}/>
                        </a>      
                    </div>
                    <div className={styles.cajaServicios}>
                        <h3 className={styles.nombreServicios}>Servicio técnico</h3>
                        <a href="/serviciotecnico">
                            <img src="/servicio-tecnico.png" alt="icono servicio técnico" className={styles.iconoServicios}/>
                        </a>
                    </div>
                    <div className={styles.cajaServicios}>
                        <h3 className={styles.nombreServicios}>Provisiones</h3>
                        <a href="/provisiones">
                            <img src="/provisiones.png" alt="icono provisiones" className={styles.iconoServicios}/>
                        </a>
                    </div>
                </div> 
            </div>
            <div className={styles.contenedorObras}>
                <h2 className={styles.subtitulos}>Obras</h2>
            </div>
            <Footer></Footer>
        </Layout>
    )
}

export default Home