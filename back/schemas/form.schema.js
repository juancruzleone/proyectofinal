const contactSchema = yup.object({
    name: yup
      .string()
      .trim()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50, "El nombre no debe exceder los 50 caracteres")
      .required("El nombre es obligatorio"),
    email: yup
      .string()
      .trim()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio"),
    message: yup
      .string()
      .trim()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(500, "El mensaje no debe exceder los 500 caracteres")
      .required("El mensaje es obligatorio"),
  });
  
  module.exports = contactSchema;