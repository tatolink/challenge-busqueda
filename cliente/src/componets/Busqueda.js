import React, { useEffect, useState } from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function useQuery() {// Funcion para la extraccion del Query Parameter en QueryString
    const { search } = useLocation();// Utilizamos la funcion de React para la Extraccion del parametro
  
    return React.useMemo(() => new URLSearchParams(search), [search]);// Almacenamos el parametro en nuestra Variable
  }

function Busqueda(){

    const [dataItems, setItems] = useState([]) // Usamos Hooks para la extracion del API Response

    let productVal = '' 
    let query = useQuery(); // Variable almacenada en query

    let handleChange = e => {// Funcion para la obtencion del cambo de busqueda
        let fieldName = e.target.name;
        let fieldVal = e.target.value;
        productVal = fieldVal
      }

    let searchFruitProduct = (product) => {// Funcion para enviar el parametro por QueryString del Resultado de la Busqueda
        console.log(product)
        window.location.href='./items?search='+product
    }

    useEffect(() => {// Utilizamos nuesta funcion de Hooks para la extraccion de nuestro Response API

        if(dataItems.length === 0){// Validacion para solo hacer la llamada del Servicio solo cuando no tenga datos en el Objeto

            if (query.get("search") != ''){// Se hace la llamada a los productos solo cuando el parametro search este instanciado en el QueryString
                axios.get('http://localhost:5000/api/items?q=' + query.get("search")).then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
                    console.log(res.data)
                    setItems(res.data)
                }).catch(err => {
                    console.log(err)
                })
            } else {
                axios.get('api/items').then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
                    console.log(res.data)
                    setItems(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }

        } else if (dataItems.length === 1 && query.get("search") != ''){// Se hace la llamada a los productos solo cuando el parametro search este instanciado en el QueryString
                
            if (dataItems.length === 1 && query.get("search") != query.get("search")){
                axios.get('http://localhost:5000/api/items?q=' + query.get("search")).then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
                    console.log(res.data)
                    setItems(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
                
        } else if (dataItems.length === 1 && query.get("search") == ''){// Se hace la llamada a los productos solo cuando el parametro search este instanciado en el QueryString
            if (dataItems.length === 1 && query.get("search") != query.get("search")){
                axios.get('api/items').then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
                    console.log(res.data)
                    setItems(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        } else if (query.get("search") == ''){// Se hace la llamada a los productos solo cuando el parametro search este instanciado en el QueryString
            if (dataItems.length === 1 && query.get("search") != query.get("search")){
                axios.get('api/items').then(res => {// Utilizamos Axios para realizar la peticion a nuestro API
                    console.log(res.data)
                    setItems(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        }

        
    })

    const itemList = dataItems.map((products, index) => { // Iteramos nuestra data almacenada del response de nuestro API

        let productUrl = products.product_url
        let idProduct = ''
        if (query.get("search") != ''){
            
            if (query.get("search") == null){
                idProduct = productUrl.substring(15,17)
            } else {
                idProduct = query.get("search")
            }

        } else if (query.get("search") != null){
            idProduct = productUrl.substring(15,17)
        }

        return (// Maquetamos nuestro Catalogo de Busquerda
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ID Producto</th>
                        <th>Nombre del Producto</th>
                        <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{index+1}</td>
                        <td>{idProduct}</td>
                        <td>{products.name}</td>
                        <td><Link to={{ pathname:`/item/${idProduct}`, query: {idProduct}}}>Ver Detalles</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    })

    return(// Maquetamos la Vista de la Caja de Busqueda
        <div>
            <Card style={{ width: '95%', textAlign: 'center', margin: '20px' }}>
                <Card.Header>Cuadro de Busqueda</Card.Header>
                <Card.Body>
                    <Card.Title>Busqueda de Frutas</Card.Title>
                    <Card.Text>
                        Vista en donde Realizamos nuestra busqueda de Productos.
                    </Card.Text>
                        <div style={{ width: '95%', textAlign: 'center', padding: '20px', margin: '20px' }}>
                            <InputGroup className="mb-3">
                                <Form.Control 
                                    placeholder="Ingrese ID Producto, Ejemplo 57"
                                    aria-label="Ingrese ID Producto, Ejemplo 57"
                                    aria-describedby="basic-addon2"
                                    onChange={handleChange.bind(this)}
                                />
                                <Button variant="primary" id="button-addon2" onClick={() => searchFruitProduct(productVal)}>
                                    Buscar Fruta por ID
                                </Button>
                            </InputGroup>

                            {itemList}
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Busqueda