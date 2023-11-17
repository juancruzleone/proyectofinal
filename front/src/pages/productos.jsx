import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const Productos = () => {
  const productosDeteccion = [
    {
      nombre: "Detector de humo",
      descripcion: "Detector de humo inteligente para hogares y oficinas.",
      imagen: "detecte-de-humo.webp",
      precio: "$50",
    },
    {
      nombre: "Central de control",
      descripcion: "Detector de monóxido de carbono para prevenir intoxicaciones.",
      imagen: "central.webp",
      precio: "$60",
    },
    {
      nombre: "Detector de c02",
      descripcion: "Detector de co2 inteligente para hogares y oficinas.",
      imagen: "detector-c02.webp",
      precio: "$50",
    },
  ];

  const productosExtincion = [
    {
      nombre: "Extintor",
      descripcion: "Extintor de polvo químico para fuegos de combustibles sólidos.",
      imagen: "extintor.webp",
      precio: "$120",
    },
    {
      nombre: "Manguera",
      descripcion: "Extintor de CO2 para fuegos eléctricos y de líquidos inflamables.",
      imagen: "manguera.webp",
      precio: "$150",
    },
    {
      nombre: "Sistema de rociadores automáticos",
      descripcion: "Sistema de rociadores automáticos para la extinción de incendios en espacios cerrados.",
      imagen: "rociador.webp",
      precio: "$300",
    }
  ];

  const [seleccionCategorias, setSeleccionCategorias] = useState("Detección");

  const cambiaCategoria = (categoria) => {
    setSeleccionCategorias(categoria);
  };

  const obtenerProductos = () => {
    let productos = [];

    if (seleccionCategorias === "Detección") {
      productos = productosDeteccion;
    } else {
      productos = productosExtincion;
    }

    return productos.map((producto, index) => {
      return (
        <div key={index} className={styles.tarjetaProducto}>
          <Image
            src={`/${producto.imagen}`}
            alt={producto.nombre}
            width={120}
            height={120}
            className={styles.imagenProducto}
          />
          <h3>{producto.nombre}</h3>
          <p>{producto.precio}</p>
          <Link className={styles.botonVerMas} href="/detalle">Ver más</Link>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className={styles.contenedorPagina}>
        <h1 className={styles.tituloPaginas}>Productos</h1>
        <div className={styles.posicionSeccionProductos}>
          <div className={styles.contenedorCategorias}>
            <a href="#" onClick={() => cambiaCategoria("Detección")}>
              Detección
            </a>
            <a href="#" onClick={() => cambiaCategoria("Extinción")}>
              Extinción
            </a>
          </div>
          <div className={styles.contenedorProductos}>
            {obtenerProductos()}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Productos;