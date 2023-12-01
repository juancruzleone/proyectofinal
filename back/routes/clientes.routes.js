import { Router } from 'express';
import * as controllers from '../controllers/clientes.controllers.js';


const route = Router();

// Traer todos los clientes
route.get('/clientes', controllers.obtenerClientes);

// Traer un cliente específico
route.get('/clientes/:id', controllers.obtenerClienteById);


// Eliminar un cliente
route.delete('/clientes/:id', controllers.eliminarCliente);

export default route;
