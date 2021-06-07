import React, { useState, useEffect } from "react";
import GastoService from "../services/GastoService";
import {
  Table,
  Badge,
  Row,
  Col,
  Button,
  Form,
  Card,
  Container,
  Modal,
} from "react-bootstrap";

const ListaGastos = () => {
  const [gastos, setGastos] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [qtd, setQtd] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    listarTodos();
  }, []);

  const getTotalDeGastos = () => {
    const soma = gastos.reduce((total, item) => {
      return total + item.sub_total;
    }, 0.0);

    return soma.toFixed(2);
  };

  const listarTodos = () => {
    GastoService.listarTodos().then((g) => setGastos(g.data));
  };

  const addGasto = () => {
    if (description != "" && value != "" && qtd != "") {
      GastoService.adicionar({
        description,
        qtd,
        value,
      }).then((g) => {
        setDescription("");
        setQtd("");
        setValue("");
        handleClose();
        listarTodos();
      });
    } else {
      return;
    }
  };

  const removeGasto = (id) => {
    GastoService.remover(id).then((item) => {
      console.log("Item removido");
      listarTodos();
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Gasto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="description">
              <Row>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  required
                  placeholder="ex: compra na loja..."
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                  type="number"
                  required
                  value={qtd}
                  placeholder="ex: 1"
                  onChange={(e) => setQtd(e.target.value)}
                />

                <Form.Label>Valor R$</Form.Label>
                <Form.Control
                  type="number"
                  required
                  value={value}
                  placeholder="ex: 5,00"
                  onChange={(e) => setValue(e.target.value)}
                />
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={addGasto}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col>
          <h1>
            <Badge variant="warning">R$ {getTotalDeGastos()}</Badge>
          </h1>
        </Col>
        <Col style={{ alignItems: "center" }}>
          <Button variant="success" onClick={handleShow}>
            Adicionar Gasto
          </Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Data</th>
              <th>Sub total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((gasto) => (
              <tr>
                <td>{gasto.description}</td>
                <td>R$ {gasto.value.toFixed(2)}</td>
                <td>{gasto.qtd}</td>
                <td>{gasto.date}</td>
                <td>R$ {gasto.sub_total.toFixed(2)}</td>
                <td>
                  <Button>Editar</Button>
                  <br />
                  <Button
                    variant="danger"
                    onClick={() => removeGasto(gasto.id)}
                  >
                    Remover
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ListaGastos;
