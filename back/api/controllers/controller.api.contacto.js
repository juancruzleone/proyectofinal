// controller.api.contacto.js
import { db } from "../../db.js";
import { contactSchema } from "../../schemas/contact.schemas.js";
import { ObjectId } from 'mongodb';

async function insertContact(contact) {
  try {
    // Agregar un _id generado automáticamente por MongoDB
    contact._id = new ObjectId();

    // Validar el contacto contra el esquema
    await contactSchema.validate(contact);

    // Mostrar el contacto antes de insertarlo
    console.log("Contacto a insertar:", contact);

    // Insertar el documento en la colección de contactos
    await db.collection("contactos").insertOne(contact);
    console.log("Contacto guardado en la base de datos");
  } catch (error) {
    console.error("Error al insertar el contacto en la base de datos:", error);
  }
}

export { insertContact };
