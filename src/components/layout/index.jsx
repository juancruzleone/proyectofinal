import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <nav className={styles.nav}>
        <Link href="/" className={styles.seccionesNav}>
          Home
        </Link>
        <Link href="/quienes-somos" className={styles.seccionesNav}>
          Quienes somos
        </Link>
        <Link href="/servicios" className={styles.seccionesNav}>
          Servicios
        </Link>
        <Link href="/productos" className={styles.seccionesNav}>
          Productos
        </Link>
        <Link href="/preguntas-frecuentes" className={styles.seccionesNav}>
          FAQ`S
        </Link>
        <Link href="/certificaciones" className={styles.seccionesNav}>
          Certificaciones
        </Link>
        <Link href="/contacto" className={styles.seccionesNav}>
          Contacto
        </Link>
        <a href="/carrito" className={styles.carrito}>
          <Image
            src="/carrito.webp"
            alt="Carrito"
            className={styles.carrito}
            width={40}
            height={40}
          />
        </a>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
