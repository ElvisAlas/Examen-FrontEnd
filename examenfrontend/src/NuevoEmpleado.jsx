import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const NuevoEmpleadoForm = ({ onEmpleadoAgregado, onHide }) => { 
  const [identidad, setIdentidad] = useState('');
  const [nombre, setNombre] = useState('');

  const handleIdentidadChange = (event) => {
    setIdentidad(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Identidad:', identidad);
    console.log('Nombre:', nombre);
    try {
      await axios.post('http://localhost:4000/api/empleados', {
        identidad,
        nombre,
      });
      console.log('Empleado agregado exitosamente');
      onEmpleadoAgregado(); 
      setIdentidad(''); 
      setNombre('');
      onHide(); 
    } catch (error) {
      console.error('Error al agregar empleado:', error);
     
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="formIdentidad">
            <Form.Label>Identidad</Form.Label>
            <Form.Control type="text" value={identidad} onChange={handleIdentidadChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={nombre} onChange={handleNombreChange} />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Agregar Empleado
      </Button>
    </Form>
  );
};

export default NuevoEmpleadoForm;
