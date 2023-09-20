import express from 'express';


const app = express();

// Middleware para analizar datos del formulario HTML
app.use(express.urlencoded({ extended: true }));

