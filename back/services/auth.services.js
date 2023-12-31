import { MongoClient, ObjectId } from "mongodb";
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb+srv://juan:juan123@proyectoinelar.2eadspu.mongodb.net/'); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4

const db = client.db("inelar");
const cuentaCollention = db.collection("cuentas")

async function crearCuenta(cuenta){
    await client.connect()

    const existe = await cuentaCollention.findOne( { userName: cuenta.userName } )

    if( existe ) throw new Error( "cuenta ya existe" )
    
    const nuevaCuenta = { ...cuenta }

    nuevaCuenta.password = await bcrypt.hash( cuenta.password, 10 )

    await cuentaCollention.insertOne(nuevaCuenta)
}

async function login( cuenta ){
    await client.connect()

    const existe = await cuentaCollention.findOne( { userName: cuenta.userName } )

    if( !existe ) throw new Error( "No me pude logear" )

    const esValido = await bcrypt.compare( cuenta.password, existe.password )

    if( !esValido ) throw new Error( "No me pude logear" )

    return { ...existe, password: undefined }
}

export {
    crearCuenta,
    login
}