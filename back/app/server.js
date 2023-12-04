import express from "express";
import ProductoRoute from '../routes/productos.routes.js'
import ApiProductoRoute from '../api/routes/route.api.productos.js'
import ApiClientesRoute from '../api/routes/route.api.clientes.js'
import ApiContactRoutes from '../api/routes/route.api.contactos.js'
import ApiServicesRoutes from '../api/routes/route.api.servicios.js'
import ApiAuth from '../api/routes/route.api.auth.js'
import cors from 'cors' 

const app = express(); //el servidor


app.use(express.urlencoded({ extended: true })); //midleware
app.use("/", express.static("public"));
app.use(express.json());                         //midleware
app.use(cors())

app.use(ProductoRoute)
app.use('/api',ApiProductoRoute)
app.use('/api',ApiClientesRoute)
app.use("/api", ApiContactRoutes);
app.use("/api", ApiServicesRoutes)
app.use('/api',ApiAuth)

app.listen(2023);
