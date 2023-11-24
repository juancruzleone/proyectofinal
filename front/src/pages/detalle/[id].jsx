// Páginas/detalle/[id].js

import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

const DetalleProducto = ({ producto }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout className={styles.app}>
      <div className={styles.contenedorDetalleProducto}>
        <div className={styles.contenedorProducto}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            width={150}
            height={180}
            className={styles.imagenProductoDetalle}
          />
        </div>
        <div className={styles.contenidoProducto}>
          <div className={styles.contenidoDetalle}>
            <h3 className={styles.nombreProductoDetalle}>{producto.name}</h3>
            <p className={styles.categoriaDetalle}>{producto.categoria}</p>
            <p className={styles.precioDetalle}>{producto.price}</p>
            <a href="#">Agregar al carrito</a>
          </div>
        </div>
      </div>
      <div className={styles.contenedorDescripcionProducto}>
        <h4>Descripción</h4>
        <p>{producto.description}</p>
      </div>
      {/* Agregar carrousel de productos */}
      <Footer></Footer>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    // Realiza la solicitud a tu base de datos o servidor para obtener los detalles del producto según el ID
    const response = await fetch(`http://localhost:2023/api/productos/${id}`);
    const producto = await response.json();

    if (!producto) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        producto,
      },
    };
  } catch (error) {
    console.error('Error al obtener detalles del producto:', error);

    return {
      notFound: true,
    };
  }
}

export default DetalleProducto;
