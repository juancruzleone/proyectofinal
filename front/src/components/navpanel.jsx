import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const PanelNav = ({ children }) => {
  return (
    <main>
      <nav className={styles.navPanel}>
        <Link href="/" className={styles.seccionesNav}>
          Servicios
        </Link>
        <Link href="/#" className={styles.seccionesNav}>
          Productos
        </Link>
        <Link href="/#" className={styles.seccionesNav}>
          Mensajes
        </Link>
      </nav>
      {children}
    </main>
  );
};

export default PanelNav;
