import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const quienesSomos = () => {
  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Nuestra historia</h1>
      <div className={styles.contenedorTextoQuienesSomos}>
        <p>
          <span>INELAR</span> , una empresa de más de 50 años especializada en
          los Sistemas automatizados de detección y extinción de incendios. Con
          obras publicas y privadas que abarcan las companias e instituciones
          mas importantes en todos los rubros : comunicación , energía ,
          transporte, entidades financieras y manufactureras.
        </p>
        <br></br>

        <p>
          Es una empresa dedicada a la investigación y el desarrollo de nuevos
          productos. A través del entrenamiento de su personal profesional,
          tanto en el país como en el extranjero, y de la representación de
          empresas especializadas de prestigio internacional reconocido, INELAR
          incorpora en forma continua los avances tecnológicos que permiten el
          mejoramiento y abaratamiento de los sistemas automáticos de control.
        </p>
        <br></br>

        <p>
          Trabajamos bajo la consigna de que todo elemento diseñado para la
          protección de la vida humana debe ser confiable y funcionar
          correctamente cuando sea requerido su uso, se encuentra empeñada en
          aumentar su capacidad para producir con calidad. Parte de este
          programa de superación es la obtención de la calificación ISO 9002 que
          garantice el reconocimiento internacional de sus productos.
        </p>
        <br></br>

        <p>
          Sabemos que todo producto de seguridad cumple su cometido cuando se
          transforma en un servicio de protección por lo que complementa su
          trabajo con programas de entrenamiento para usuarios, y realiza cursos
          de actualización para Profesionales. Enterese de las ultimas Jornadas
          Cuenta además con una Departamento Técnico y mesa de ayuda para
          cualquier consulta referida a sus productos o a Normas y
          Requerimientos nacionales o internacionales de seguridad Contra
          Incendio.
        </p>
        <br></br>

        <p>
          Podemos exhibir hoy, como resultado de su esfuerzo, una extensa gama
          de productos y servicios de alta calidad que la han convertido en un
          símbolo de tecnología e innovación, líder en el mercado argentino.
        </p>
        <br></br>

        <p>
          Protegemos lo mas importante utilizando los recursos más modernos de
          la ingeniería y la informática.
        </p>
        <br></br>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default quienesSomos;
