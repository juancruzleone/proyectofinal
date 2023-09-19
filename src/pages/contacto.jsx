import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Contacto = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Contactános</h1>
      <div className={styles.posicionContacto}>
        <div className={styles.contenedorMapa}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.364145952763!2d-58.47944842470645!3d-34.56965147296652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb73dfb2108cd%3A0x60a2394907b54ab7!2sINELAR%20SRL!5e0!3m2!1ses!2sar!4v1693348873615!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapa}
          ></iframe>
          <address>Monroe 4191 - Buenos Aires (C1430BLF) Argentina.</address>
        </div>
        <div className={styles.contenedorFormulario}>
          <form action="" className={styles.formulario}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Contacto;
