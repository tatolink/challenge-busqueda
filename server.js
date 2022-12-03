//Importamos Librerias
const express = require('express')
const itemsRoute = require('./routes/items')
const app = express()

const PORT = 5000

app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);// Recopilamos en consola el metodo y url a donde se esta corriendo
    res.header("Access-Control-Allow-Origin", "*"); // Agregando headers de todo acceso por CORS Domain
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api/items', itemsRoute);// Definimos la Ruta de nuesto Servicio

//Definimos el Puerto en donde Saldra nuestros Servicios API, en este caso se definio en el puerto 5000 en nuestra variable PORT
app.listen(PORT, function(){
    console.log(`El Servidor API esta corriendo correctamente en el Puerto ${PORT}`)//Log de Test
});

