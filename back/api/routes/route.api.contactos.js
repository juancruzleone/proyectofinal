// contactoRoutes.js
import { Router } from 'express';
import * as controllers from '../controllers/controller.api.contacto.js';
import { validateContact } from '../../middleware/contacto.validate.middleware.js';

const route = Router();

// Agregar un contacto
route.post('/contactos', [validateContact], controllers.insertContact);

export default route;
