import { Container, Navbar, Nav } from "react-bootstrap";
import ListaGastos from "./components/ListaGastos";

function App() {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Gastos App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </header>
      <Container>
        <ListaGastos />
      </Container>
    </>
  );
}

export default App;
