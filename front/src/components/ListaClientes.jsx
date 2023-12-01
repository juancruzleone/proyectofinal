// ListaClientes.jsx

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const response = await fetch("http://localhost:2023/api/clientes");
        const data = await response.json();

        setClientes(data);

        // Obtener las categorías únicas de los clientes
        const categoriasUnicas = Array.from(
          new Set(data.map((cliente) => cliente.category || "Sin Categoría"))
        );
        setCategorias(categoriasUnicas);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };

    obtenerClientes();
  }, []);

  useEffect(() => {
    // Filtrar los clientes según la categoría seleccionada
    if (categoriaSeleccionada === null) {
      setClientesFiltrados(clientes);
    } else {
      const clientesFiltrados = clientes.filter(
        (cliente) => cliente.category === categoriaSeleccionada
      );
      setClientesFiltrados(clientesFiltrados);
    }
  }, [categoriaSeleccionada, clientes]);

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <>
      <div className={styles.contenedorPagina}>
        <h1 className={styles.tituloPaginas}>Clientes</h1>
        <div className={styles.posicionSeccionProductos}>
          <div className={styles.contenedorCategorias}>
            {/* Lista de categorías como contenedores */}
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className={`${styles.contenedorCategoria} ${
                  categoria === categoriaSeleccionada
                    ? styles.categoriaSeleccionada
                    : ""
                }`}
                onClick={() => handleClickCategoria(categoria)}
              >
                <p>{categoria}</p>
              </div>
            ))}
          </div>

          {/* Lista de clientes filtrada por categoría */}
          <div className={styles.contenedorClientes}>
            {clientesFiltrados.map((cliente, index) => (
              <div key={index} className={styles.tarjetaProductoPanel}>
                <h3>{cliente.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaClientes;
