import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      {/*Ordenar mejor el codigo de nuestra App, para que el titulo quede en el mismo contenedor que el parrafo y haga display flex con el circulo y la imagen*/}
      <h1 className={styles.tituloHome}>INELAR</h1>

      <div className={styles.contenedorNuestraApp}>
        <div className={styles.circulo}>
          <div className={styles.celularApp}>
            <Image
              src="/app.webp"
              alt="mockup app mobile inelar"
              className={styles.celularImagen}
              width={200}
              height={270}
            />
          </div>
        </div>
        <div className={styles.contenedorTextoNuestraApp}>
          <h2 className={styles.subtituloApp}>Descubre Nuestra App</h2>
          <p>
            ¡Bienvenido a la puerta de entrada a la innovación tecnológica! En
            INELAR, hemos creado una aplicación revolucionaria pensando en ti y
            en la simplicidad de mantener tus dispositivos siempre en óptimas
            condiciones.
          </p>
          <br></br>
          <p>
            Nuestra App es tu solución para un mantenimiento rápido y efectivo.
            Imagina tener el control total de tus dispositivos con tan solo un
            escaneo de código QR. Es fácil, rápido y está diseñado pensando en
            ti.
          </p>
        </div>
      </div>

      <div className={styles.contenedorServicios}>
        <h2 className={styles.subtituloServicios}>Servicios</h2>
        <div className={styles.posicionServicios}>
          <div className={styles.cajaServicios}>
            <h3 className={styles.nombreServicios}>Instalaciones</h3>
            <a href="/instalaciones">
              <Image
                src="/instalaciones.webp"
                alt="icono detector"
                className={styles.iconoServicios}
                width={140}
                height={140}
              />
            </a>
          </div>
          <div className={styles.cajaServicios}>
            <h3 className={styles.nombreServicios}>Mantenimientos</h3>
            <a href="/mantenimientos">
              <Image
                src="/mantenimiento.webp"
                alt="icono mantenimientos"
                className={styles.iconoServicios}
                width={140}
                height={140}
              />
            </a>
          </div>
          <div className={styles.cajaServicios}>
            <h3 className={styles.nombreServicios}>Servicio técnico</h3>
            <a href="/serviciotecnico">
              <Image
                src="/servicio-tecnico.webp"
                alt="icono servicio técnico"
                className={styles.iconoServicios}
                width={140}
                height={140}
              />
            </a>
          </div>
          <div className={styles.cajaServicios}>
            <h3 className={styles.nombreServicios}>Provisiones</h3>
            <a href="/provisiones">
              <Image
                src="/provisiones.webp"
                alt="icono provisiones"
                className={styles.iconoServicios}
                width={140}
                height={140}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contenedorObras}>
        <h2 className={styles.subtitulos}>Obras</h2>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Home;
