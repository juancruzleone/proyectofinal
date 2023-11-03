import Message from "../models/message.js";
import contactSchema from "../schemas/form.schema.js";

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validar los datos del formulario usando el schema de validación
    await contactSchema.validate({ name, email, message }, { abortEarly: false });

    // Crear un nuevo objeto Message a partir de los datos del formulario
    const newMessage = new Message({ name, email, message });

    // Guardar el nuevo mensaje en la base de datos usando el método save() de Mongoose
    await newMessage.save();

    // Devolver una respuesta con un código de estado 201 (Created) y un mensaje de éxito
    res.status(201).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    // Si se produjo un error de validación, devolver los errores en una respuesta con un código de estado 400 (Bad Request)
    if (error.name === "ValidationError") {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      res.status(400).json({ errors });
    } else {
      // Si se produjo otro tipo de error, devolver una respuesta con un código de estado 500 (Internal Server Error)
      console.error(error);
      res.status(500).json({ message: "Ha ocurrido un error al crear el mensaje" });
    }
  }
};