import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const SolicitarInstalacion = () => {
  // Definir el estado inicial del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    dispositivo: "",
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
      // Enviar una petición POST a la ruta /api/solicitudes con los datos del formulario
      const res = await fetch("/api/solicitudes", {
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
      <h1 className={styles.tituloSolicitudServicio}>Solicitar instalación</h1>
      <div className={styles.contenedorContenidoServicio}>
        <p className={styles.textoSolicitudServicios}>
          Si quieres solicitar nuestro servicio de instalación de dispositivos,
          por favor completa el siguiente formulario con tus datos y los detalles
          de tu solicitud. Nos pondremos en contacto contigo lo antes posible
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
          <label htmlFor="dispositivo">Dispositivo:</label>
          <select
            id="dispositivo"
            name="dispositivo"
            value={formData.dispositivo}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="detectores">Detectores</option>
            <option value="extintores">Extintores</option>
            <option value="mangueras">Mangueras</option>
            <option value="centrales">Centrales</option>
          </select>
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

export default SolicitarInstalacion;
