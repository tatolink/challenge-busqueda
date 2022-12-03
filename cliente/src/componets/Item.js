import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  useParams
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(){

  let query = useParams(); // Instanciamos nuestra variable para la extracion de nuestro parametro por Query Parameters

  const [dataItemsFruits, setItemsFruits] = useState([])// Usamos Hooks para la extracion del API Response

  useEffect(() => {// Utilizamos nuesta funcion de Hooks para la extraccion de nuestro Response API

      if(dataItemsFruits.length === 0){// Validacion para solo hacer la peticion siempre no tengamos datos en nuestra variable de Objeto

          axios.get('http://localhost:5000/api/items?q=' + query.id).then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
              console.log(res.data)
              setItemsFruits(res.data)
          }).catch(err => {
              console.log(err)
          })

      }

  })

  const fruitsDetails = dataItemsFruits.map((products, index) => {// Iteramos nuestra data almacenada del response de nuestro API

    let productImg = 'https://api.predic8.de' + products.photo_url

    return (// Maquetamos el Detalle de Productos
        <>
            <Card style={{ width: '100%', textAlign: 'center' }}>
              <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                  Precio: {products.price}
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={productImg} />
              <Button variant="primary" onClick={() => window.location.href='/items'}>Regresar a la Caja de Busqueda</Button>
            </Card>
        </>
    )
})  
  

  return(// Maquetamos la Vista del Detalle de Productos
    <div>
        <Card style={{ width: '95%', textAlign: 'center', margin: '20px' }}>
          <Card.Header>Detalle de Busqueda</Card.Header>
          <Card.Body>
              <Card.Title>Detalle de Frutas</Card.Title>
              <Card.Text>
                  Vista del Detalle de Productos de la fruta {query.id}.
              </Card.Text>
              <div style={{ width: '95%', textAlign: 'center', padding: '20px', margin: '20px' }}>
                {fruitsDetails}
              </div>
          </Card.Body>
        </Card>
    </div>
)

}

export default Item