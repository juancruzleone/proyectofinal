// register.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

// Configurar react-modal
Modal.setAppElement("#__next");

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que el usuario haya ingresado un nombre de usuario y una contraseña
    if (!usuario && !contraseña) {
      setError("Por favor, ingresa un nombre de usuario y una contraseña.");
      return;
    }

    if (!usuario) {
      setError("Por favor, ingresa un nombre de usuario.");
      return;
    }

    if (!contraseña) {
      setError("Por favor, ingresa una contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2023/api/cuenta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: usuario, password: contraseña }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Mensajes de error personalizados en español
        if (errorData.error.message === "cuenta ya existe") {
          setError("La cuenta ya existe. Por favor, inicia sesión.");
        } else if (errorData.error.message === "Nombre de usuario y contraseña deben tener al menos 6 caracteres") {
          setError("Nombre de usuario y contraseña deben tener al menos 6 caracteres.");
        } else {
          setError(`Error en la solicitud: ${errorData.error.message}`);
        }
        return;
      }

      // Solicitud exitosa, mostrar el modal
      setShowModal(true);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError("Error de red");
    }
  };

  return (
    <Layout className={styles.app}>
      <div className={styles.contenedorPrelogin}>
        <div className={styles.formularioPrelogin}>
          <h1 className={styles.tituloPrelogin}>Regístrate</h1>
          <form onSubmit={handleSubmit} className={styles.formularioLogin}>
            <label htmlFor="usuario" className={styles.formLabel}>
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Crea un usuario nuevo"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label htmlFor="contraseña" className={styles.formLabel}>
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Crea la contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button type="submit">Regístrate</button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Cuenta creada exitosamente"
        className={styles.Modal}
      >
        <p>Cuenta creada exitosamente</p>
        <Link href="/login">Iniciar sesión</Link>
        <button onClick={() => setShowModal(false)}>❌</button>
      </Modal>

      <Footer />
    </Layout>
  );
};

export default Register;
