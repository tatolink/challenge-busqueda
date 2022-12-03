const Router = require('express')

const router = Router()

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));// Declaramos una Constante Fetch para almacenar los datos del API Publico

router.get('/item/', async (req, res) => {// Servicio para la recoleccion de todos los items
    const url =
		'https://api.predic8.de:443/shop/products/';// Definimos la url del API Tercero

    const options = {
        method: 'GET', // Definimos el metodo por GET
        headers: {
            'Content-Type': 'application/json' // Definimos los Headers de la peticion
        }
    };
    // Declaramos promise syntaxis
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json.products))// Solo Retornamos los productos a iterar
        .catch(err => console.error('error:' + err));// Capturamos el Error
    try {
        let response = await fetch(url, options);
        response = await response.json();
        console.log(response.products);
        res.status(200).json(response.products);// Recolectamos la data del json en nuestro API
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});// Capturamos el Error
    }

})

router.get('/item/:id', async (req, res) => {// Servicio para la recoleccion de todos los items por id
    const url =
		'https://api.predic8.de:443/shop/products/'+req.params.id; // Definimos la url del API Tercero por id, en defenicion por request parameter

    const options = {
        method: 'GET', // Definimos el metodo por GET
        headers: {
            'Content-Type': 'application/json'// Definimos los Headers de la peticion
        }
    };
    // promise syntax
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();
        console.log([response]);
        res.status(200).json([response]);// Recolectamos la data del json en nuestro API
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});// Capturamos el Error
    }

})

router.get('', async (req, res) => {// Servicio para la recoleccion de todos los items por id por Query Parameters

    let queryParam  = req.query.q //Capturamos nuestro Query Parameter llamado "q" desde "?q="
    console.log('queryParam: ' + queryParam)
    const parseQuery = parseInt(queryParam)
    console.log('parseQuery: ' + parseQuery)

    let apiRequestUrl = 'https://api.predic8.de:443/shop/products/'

    if (!isNaN(queryParam)){
         apiRequestUrl = 'https://api.predic8.de:443/shop/products/' + parseQuery
    }

    const url = apiRequestUrl; // Definimos la url del API Tercero por id, en defenicion por request parameter

    const options = {
        method: 'GET', // Definimos el metodo por GET
        headers: {
            'Content-Type': 'application/json'// Definimos los Headers de la peticion
        }
    };

    if (!isNaN(queryParam)){
        
        // Declaramos promise syntaxis
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
        try {
            let response = await fetch(url, options);
            response = await response.json();
            console.log([response]);
            res.status(200).json([response]);// Recolectamos la data del json en nuestro API
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: `Internal Server Error.`});// Capturamos el Error
        }
        
    } else {
        // Declaramos promise syntaxis
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json.products))// Solo Retornamos los productos a iterar
            .catch(err => console.error('error:' + err));// Capturamos el Error
        try {
            let response = await fetch(url, options);
            response = await response.json();
            console.log(response.products);
            res.status(200).json(response.products);// Recolectamos la data del json en nuestro API
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: `Internal Server Error.`});// Capturamos el Error
        }
    }
    

})

module.exports = router