const Solicitud = require("../../../models/Solicitud");

// Función para guardar una solicitud en la base de datos
const guardarSolicitud = async (datos) => {
  try {
    const nuevaSolicitud = new Solicitud(datos);
    await nuevaSolicitud.save();
    return nuevaSolicitud;
  } catch (err) {
    console.error(err);
    throw new Error("Ocurrió un error al guardar la solicitud");
  }
};

// Función para guardar una solicitud de mantenimiento en la base de datos
const guardarSolicitudMantenimiento = async (datos) => {
  try {
    const nuevaSolicitud = new Solicitud(datos);
    await nuevaSolicitud.save();
    return nuevaSolicitud;
  } catch (err) {
    console.error(err);
    throw new Error("Ocurrió un error al guardar la solicitud de mantenimiento");
  }
};

// Función para guardar una solicitud de provisiones en la base de datos
const guardarSolicitudProvisiones = async (datos) => {
  try {
    const nuevaSolicitud = new Solicitud(datos);
    await nuevaSolicitud.save();
    return nuevaSolicitud;
  } catch (err) {
    console.error(err);
    throw new Error("Ocurrió un error al guardar la solicitud de provisiones");
  }
};

// Función para guardar una solicitud de servicio técnico en la base de datos
const guardarSolicitudServicioTecnico = async (datos) => {
  try {
    const nuevaSolicitud = new Solicitud(datos);
    await nuevaSolicitud.save();
    return nuevaSolicitud;
  } catch (err) {
    console.error(err);
    throw new Error("Ocurrió un error al guardar la solicitud de servicio técnico");
  }
};

module.exports = {
  guardarSolicitud,
  guardarSolicitudMantenimiento,
  guardarSolicitudProvisiones,
  guardarSolicitudServicioTecnico,
};