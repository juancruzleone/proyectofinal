import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const SolicitarServicioTecnico = () => {
  // Definir el estado inicial del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    problema: "",
    fecha: "",
  });

  // Definir una función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Definir una función para enviar los datos del formulario al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar una petición POST a la ruta /api/servicios con los datos del formulario
      const res = await fetch("/api/servicios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Verificar si la respuesta es exitosa
      if (res.ok) {
        // Convertir la respuesta a un objeto JSON
        const data = await res.json();
        // Mostrar un mensaje de éxito
        alert("Solicitud enviada con éxito");
      } else {
        // Mostrar un mensaje de error según el código de estado
        alert(`Ocurrió un error al enviar la solicitud: ${res.status}`);
      }
    } catch (err) {
      // Mostrar un mensaje de error por problemas de red o del servidor
      console.error(err);
      alert("Ocurrió un error al enviar la solicitud");
    }
  };

  return (
    <Layout>
      <h1 className={styles.tituloSolicitudServicio}>Solicitar servicio técnico</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoSolicitudServicios}>
          Si quieres solicitar nuestro servicio de reparación de dispositivos,
          por favor completa el siguiente formulario con tus datos y los detalles
          de tu problema. Nos pondremos en contacto contigo lo antes posible
          para confirmar la fecha y el precio.
        </p>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
          <label htmlFor="problema">Problema:</label>
          <textarea
            id="problema"
            name="problema"
            value={formData.problema}
            onChange={handleChange}
            required
          />
          <label htmlFor="fecha">Fecha deseada:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.botonSolicitudServicio}>
            Enviar solicitud
          </button>
        </form>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default SolicitarServicioTecnico;