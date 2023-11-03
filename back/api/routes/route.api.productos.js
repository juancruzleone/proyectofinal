import express from "express";
import { obtenerProductosPorCategoria } from "../controllers/controller.api.productos";

const router = express.Router();

// Obtener todos los productos de la categoría especificada
router.get("/:categoria", async (req, res) => {
  const categoria = req.params.categoria;
  const productos = await obtenerProductosPorCategoria(categoria);
  res.json(productos);
});

export default router;