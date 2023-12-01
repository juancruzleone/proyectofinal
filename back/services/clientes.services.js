// services/clientes.services.js
import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb+srv://juan:juan123@proyectoinelar.2eadspu.mongodb.net/'); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4

const db = client.db("inelar");


async function obtenerClientes(filter = {}) {
  const filterMongo = { eliminado: { $ne: true } }

  // Puedes agregar lógica adicional para filtrar según tus necesidades

  return db
    .collection("clientes")
    .find(filterMongo)
    .toArray();
}

async function obtenerClienteById(id) {
  return db.collection("clientes").findOne({ _id: new ObjectId(id) });
}

const crearCliente = async (cliente) => {
  const clienteInsertado = await db.collection("clientes").insertOne(cliente);
  cliente._id = clienteInsertado.insertedId;

  return cliente;
};

const reemplazarCliente = async (id, cliente) => {
  const clienteEditado = await db.collection("clientes").replaceOne({ _id: new ObjectId(id) }, cliente);
  return clienteEditado;
};

const editarCliente = async (id, nuevoCliente) => {
  const clienteEditado = await db.collection("clientes").updateOne(
    { _id: new ObjectId(id) },
    { $set: nuevoCliente }
  );
  return clienteEditado;
};

const eliminarCliente = async (id) => {
  const clienteEliminado = await db.collection("clientes").deleteOne({ _id: new ObjectId(id) });
  return clienteEliminado;
};

export {
  obtenerClientes,
  obtenerClienteById,
  crearCliente,
  reemplazarCliente,
  editarCliente,
  eliminarCliente,
};
