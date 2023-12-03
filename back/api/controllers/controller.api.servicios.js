// controller.api.servicios.js
import { db } from "../../db.js";
import { maintenanceSchema, technicalServiceSchema, installationSchema, provisionsSchema } from "../../schemas/service.schema.js";

async function insertService(service) {
  try {
    let schema;

    // Cambiar 'categoria' a 'category'
    switch (service.category) {
      case 'mantenimiento':
        schema = maintenanceSchema;
        break;
      case 'tecnico':
        schema = technicalServiceSchema;
        break;
      case 'instalaciones':
        schema = installationSchema;
        break;
      case 'provisiones':
        schema = provisionsSchema;
        break;
      default:
        throw new Error("Categoría de servicio no válida");
    }

    // Validar el servicio contra el esquema correspondiente
    await schema.validate(service);

    // Insertar el documento en la colección de servicios con la categoría
    await db.collection("servicios").insertOne({ ...service, category: service.category });
    console.log("Servicio guardado en la base de datos");
  } catch (error) {
    console.error("Error al insertar el servicio en la base de datos:", error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
}

async function getServices() {
  try {
    // Obtener todos los servicios de la colección sin filtrar
    const servicios = await db.collection("servicios").find().toArray();
    return servicios;
  } catch (error) {
    console.error("Error al obtener la lista de servicios:", error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
}

export { insertService, getServices };
