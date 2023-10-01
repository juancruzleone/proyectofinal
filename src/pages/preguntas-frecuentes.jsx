import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const PreguntasFrecuentes = () => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const preguntasRespuestas = [
    {
      pregunta: "¿Cómo puedo realizar un pedido en la tienda online de Natura?",
      respuesta:
        "Para realizar un pedido en nuestra tienda online, primero debes registrarte en nuestro sitio. Luego, navega por las categorías de productos como perfumes, cremas y desodorantes, selecciona los productos que desees y agrégalos a tu carrito de compras. Finalmente, sigue los pasos indicados para confirmar tu pedido y realizar el pago.",
    },
    {
      pregunta: "¿Cuáles son los métodos de pago aceptados?",
      respuesta:
        "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias y pagos en efectivo al momento de la entrega. Durante el proceso de compra, podrás seleccionar el método de pago que mejor te convenga.",
    },
    {
      pregunta: "¿Cuál es el plazo de entrega de los productos?",
      respuesta:
        "El plazo de entrega puede variar según tu ubicación y el tipo de producto. En general, intentamos entregar los pedidos dentro de 3 a 7 días hábiles. Te proporcionaremos información detallada sobre el tiempo estimado de entrega durante el proceso de compra.",
    },
    {
      pregunta: "¿Puedo realizar cambios o devoluciones?",
      respuesta:
        "Sí, aceptamos cambios y devoluciones en caso de que el producto recibido presente algún defecto o no cumpla con tus expectativas. Debes ponerte en contacto con nuestro servicio al cliente dentro de los 15 días hábiles posteriores a la entrega para gestionar el proceso de cambio o devolución.",
    },
    {
      pregunta: "¿Ofrecen envíos internacionales?",
      respuesta:
        "Actualmente, nuestros envíos están limitados a direcciones dentro de Argentina. No ofrecemos envíos internacionales en este momento.",
    },
    {
      pregunta: "¿Cómo puedo contactar al servicio al cliente de Natura?",
      respuesta:
        "Puedes contactarnos a través de nuestro correo electrónico de contacto: info@natura.com o llamando al número de teléfono +123-456-789.",
    },
    {
      pregunta: "¿Qué es Inelar?",
      respuesta:
        "Inelar es una empresa de tecnología especializada en el desarrollo de software y soluciones digitales para empresas de diversos sectores.",
    },
    {
      pregunta: "¿Cuál es la misión de Inelar?",
      respuesta:
        "Nuestra misión es proporcionar a las empresas herramientas tecnológicas innovadoras que les permitan mejorar su eficiencia y competitividad en el mercado.",
    },
    {
      pregunta: "¿Qué tipos de servicios ofrece Inelar?",
      respuesta:
        "Inelar ofrece una amplia gama de servicios, que incluyen desarrollo de software a medida, consultoría tecnológica, diseño de aplicaciones móviles y web, y soluciones de comercio electrónico.",
    },
    {
      pregunta: "¿Cómo puedo contactar a Inelar para obtener más información?",
      respuesta:
        "Puedes ponerte en contacto con nosotros a través de nuestro correo electrónico de contacto: info@inelar.com o llamando al número de teléfono +123-456-789.",
    },
    {
      pregunta: "¿Cuál es el proceso de desarrollo de software en Inelar?",
      respuesta:
        "El proceso de desarrollo de software en Inelar sigue un enfoque personalizado, desde la conceptualización y diseño hasta la implementación y mantenimiento. Trabajamos de cerca con nuestros clientes para garantizar que sus necesidades se cumplan en cada etapa del proyecto.",
    },
    {
      pregunta: "¿Inelar ofrece servicios de diseño de aplicaciones móviles?",
      respuesta:
        "Sí, en Inelar ofrecemos servicios de diseño y desarrollo de aplicaciones móviles tanto para Android como para iOS. Creamos aplicaciones a medida que se adapten a las necesidades de tu negocio.",
    },
    {
      pregunta: "¿Cuál es el tiempo de entrega típico para proyectos de desarrollo de software?",
      respuesta:
        "El tiempo de entrega puede variar según la complejidad del proyecto. Sin embargo, trabajamos diligentemente para entregar proyectos en plazos razonables y proporcionamos estimaciones detalladas durante la consulta inicial.",
    },
    {
      pregunta: "¿Inelar ofrece servicios de consultoría tecnológica?",
      respuesta:
        "Sí, ofrecemos servicios de consultoría tecnológica para ayudar a las empresas a identificar oportunidades de mejora y a implementar soluciones tecnológicas efectivas.",
    },
    {
      pregunta: "¿Qué sectores atiende Inelar?",
      respuesta:
        "En Inelar, trabajamos con clientes de diversos sectores, incluyendo el sector financiero, de salud, educativo, manufacturero y más. Nuestra experiencia nos permite adaptarnos a las necesidades específicas de cada industria.",
    },
    {
      pregunta: "¿Inelar proporciona soporte técnico y mantenimiento continuo?",
      respuesta:
        "Sí, ofrecemos servicios de soporte técnico y mantenimiento continuo para garantizar que las soluciones tecnológicas sigan siendo efectivas y actualizadas a lo largo del tiempo.",
    },
  ];

  const handleClick = (index) => {
    if (preguntaAbierta === index) {
      setPreguntaAbierta(null);
    } else {
      setPreguntaAbierta(index);
    }
  };

  useEffect(() => {
    const toggleButtons = document.querySelectorAll(`.${styles.toggleButton}`);

    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const preguntaFrecuente = button.parentElement;
        const respuesta = preguntaFrecuente.querySelector(
          `.${styles.respuesta}`
        );

        preguntaFrecuente.classList.toggle("active");
        respuesta.classList.toggle("show");
        button.textContent = respuesta.classList.contains("show") ? "-" : "+";

        if (respuesta.classList.contains("show")) {
          preguntaFrecuente.style.height =
            preguntaFrecuente.scrollHeight + "px";
        } else {
          preguntaFrecuente.style.height = null;
        }
      });
    });
  }, []);

  return (
    <Layout>
      <h1 className={styles.tituloPaginas}>Preguntas frecuentes</h1>
      <div className={styles.posicionPreguntasFrecuentes}>
        {preguntasRespuestas.map((item, index) => (
          <div
            className={`${styles.contenedorPreguntaRespuesta} ${
              preguntaAbierta === index ? styles.respuestaAbierta : ""
            }`}
            key={index}
            style={{
              marginBottom: preguntaAbierta === index ? "0px" : "0",
              height: preguntaAbierta === index ? "auto" : "60px",
            }}
          >
            <button
              className={styles.toggleButton}
              onClick={() => handleClick(index)}
            >
              {preguntaAbierta === index ? "-" : "+"}
            </button>
            <h2 id={styles.titulosPreguntas}>{item.pregunta}</h2>
            <div
              className={`${styles.respuesta} ${
                preguntaAbierta === index ? styles.respuestaVisible : ""
              } show`}
            >
              <p id={styles.respuestasPreguntas}>{item.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default PreguntasFrecuentes;