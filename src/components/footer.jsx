import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const Footer = () => {
  return (
    <footer>
        <div className={styles.contenedorFooter}>
          <div className={styles.contenedorTituloFooter}>
            <h3 className={styles.tituloFooter}>Inelar S.R.L</h3>
          </div>
          <div className={styles.contenedorFormasContactoFooter}>
            <ul>
              <li>Telefono 1</li>
              <li>Telefono 2</li>
              <li>Telefono 3</li>
              <Link href="ventas@inelar.com.ar" className={styles.emailFooter}>ventas@inelar.com.ar</Link>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
