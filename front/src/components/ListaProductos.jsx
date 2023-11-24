// components/ListaProductos.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza la solicitud al backend cuando el componente se monta
    const obtenerProductos = async () => {
      try {
        const response = await fetch("http://localhost:2023/api/productos");
        const data = await response.json();

        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, []); // Se ejecuta solo cuando el componente se monta

  return (
    <div>
      <div className={styles.contenedorPagina}>
        <h1 className={styles.tituloPaginas}>Productos</h1>
        <div className={styles.posicionSeccionProductos}>
          <div className={styles.contenedorProductosPanel}>
            {productos.map((producto, index) => (
              <div key={index} className={styles.tarjetaProductoPanel}>
                <h3>{producto.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaProductos;
