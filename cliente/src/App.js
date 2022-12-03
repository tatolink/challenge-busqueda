import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Busqueda from './componets/Busqueda';
import Item from './componets/Item';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {// Definimos las Rutas del Proyecto
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="">Challenge Busqueda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">busqueda</Nav.Link>
                <Nav.Link href="">detalle</Nav.Link>
                <Nav.Link href="">Developed by Edgar Navas</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate replace to="/items"/>}></Route>
            <Route exact path="/items" element={<Busqueda/>}/>
            <Route path='/item/:id' element={<Item/>}></Route>
            <Route path="*" element={<Busqueda/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
