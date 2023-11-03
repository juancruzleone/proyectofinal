const express = require("express");
const router = express.Router();
const Solicitud = require("../models/Solicitud");

// Ruta para guardar una solicitud en la base de datos
router.post("/", async (req, res) => {
  try {
    const nuevaSolicitud = new Solicitud(req.body);
    await nuevaSolicitud.save();
    res.status(201).json(nuevaSolicitud);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrió un error al guardar la solicitud" });
  }
});

module.exports = router;