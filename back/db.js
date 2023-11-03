import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://juan:<password>@proyectoinelar.2eadspu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp') // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4
const db = client.db("inelar")

client.connect()
    .then( async() => {
        console.log("CONECTADO")
        const data = await db.collection("cafes").find().toArray()
        console.log(data)
    } )
    .catch( () => console.log("No me pude conectar") )