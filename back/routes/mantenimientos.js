import express from "express";
const router = express.Router();
const { guardarSolicitud } = require("../controllers/solicitudesController");

// Ruta para guardar una solicitud de mantenimiento en la base de datos
router.post("/", async (req, res) => {
  try {
    const nuevaSolicitud = await guardarSolicitud(req.body);
    res.status(201).json(nuevaSolicitud);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrió un error al guardar la solicitud de mantenimiento" });
  }
});

module.exports = router;