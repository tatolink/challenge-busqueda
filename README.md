# Challenge Busqueda
Proyecto de Busqueda de Productos de Frutas

El Proyecto esta Realizado con Reactjs con Hooks y NodeJs Express, el cual se divide en la parte de Cliente y Servidor.

## `Cliente`

El proyecto esta alojado en la carpeta "Cliente", el cual contiene toda la parte Frontend del Proyecto el cual esta en ReactJs con Hooks.

### `\Cliente`

Basado en:

* Usabilidad
* SEO
* Modularidad
* Reutilización

**Este proyecto se manejo con el Framework de Estilos en Bootstrap**

### Scripts para levantar el Proyecto del Cliente

Este proyecto se inicia con este comando:

### `npm start`

**Para tener mas contexto de los demas comando consultar el README en la carpeta de Cliente**

Se generaron Vistas el cual son navgables independientemente con su propia URL:

* Caja de Busqueda: `/`
* Resultado de la busqueda: `/items?search=` 
* Detalle `/items/:id`

**Compartiendo tecnologia basado en QueryString, QueryParams y Routes**

## `Servidor`

El proyecto esta alojado en la archivo .js "server", el cual contiene toda la parte Backend en donde alojamos las API Service del Proyecto el cual esta en NodeJs con Express.

### `server.js`

### Scripts para levantar el Proyecto del Cliente

Este proyecto se instalo las dependencias de nodemon para ejecutarlo con live action se inicia con este comando:

### `npm install -g nodemon`

Y para inciar el Priyecto se corre este comando:

### `nodemon server.js`

**El cual se ejecuta en el Puerto `5000`**

### Informaciòn sobre la contruccion de los API

Se genero en base a un API Tercero Publico [App Public documentation](https://api.predic8.de/shop/docs). el cual almacenamos la informacion JSON en Express creando asi nuestra propia libreria de Servicios, el cuales consta de este formato en QueryString:

### `/api/items?q=:query`

Asi mismo se incluyo una coleccion de los Servicios en Postman para que se puedan consultar

### `challenge-busqueda.postman_collection`
