import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, Alert } from 'react-bootstrap';
import NuevoEmpleadoForm from './NuevoEmpleado';

function ConsultaEliminacionEmpleado() {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [notification, setNotification] = useState(null);
  const [identidad, setIdentidad] = useState('');
  const [nombre, setNombre] = useState('');
  const [showNuevoEmpleadoModal, setShowNuevoEmpleadoModal] = useState(false);
  const [showEmpleadoAgregadoAlert, setShowEmpleadoAgregadoAlert] = useState(false);

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const fetchEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de empleados:', error);
    }
  };

  const handleVerInformacion = (empleado) => {
    setSelectedEmpleado(empleado);
    setIdentidad(empleado.identidad);
    setNombre(empleado.nombre);
    setModalShow(true);
  };

  const handleEliminarRegistro = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/empleados/${id}`);
      fetchEmpleados();
      setNotification('Empleado eliminado exitosamente.');
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.error('Error al eliminar el empleado:', error);
      setNotification('Error al eliminar el empleado.');
    }
  };

  const handleActualizarEmpleado = async () => {
    if (!selectedEmpleado) return;
    try {
      await axios.put(`http://localhost:4000/api/empleados/${selectedEmpleado.id}`, { identidad, nombre });
      fetchEmpleados();
      setNotification('Empleado actualizado exitosamente.');
      setTimeout(() => {
        setNotification(null);
      }, 3000);
      setModalShow(false);
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
      setNotification('Error al actualizar el empleado.');
    }
  };

  const handleNuevoEmpleado = () => {
    setShowNuevoEmpleadoModal(true);
  };

  const handleEmpleadoAgregado = () => {
    setShowEmpleadoAgregadoAlert(true);
    setTimeout(() => {
      setShowEmpleadoAgregadoAlert(false);
    }, 3000);
    fetchEmpleados();
  };

  const handleHideNuevoEmpleadoModal = () => {
    setShowNuevoEmpleadoModal(false);
  };

  return (
    <div className="container">
      <h1>Lista de Empleados</h1>
      <Button variant="success" onClick={handleNuevoEmpleado} className="px-2">Nuevo Empleado</Button> 
      {notification && (
        <div className="alert alert-success" role="alert">
          {notification}
        </div>
      )}
      {showEmpleadoAgregadoAlert && (
        <Alert variant="success" onClose={() => setShowEmpleadoAgregadoAlert(false)} dismissible>
          Empleado agregado exitosamente.
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.id}</td>
              <td>{empleado.nombre}</td>
              <td>
                <Button variant="info" onClick={() => handleVerInformacion(empleado)}>Ver Información</Button>{' '}
                <Button variant="danger" onClick={() => handleEliminarRegistro(empleado.id)}>Eliminar Registro</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <ModalHeader closeButton>
          Información del Empleado
        </ModalHeader>
        <ModalBody>
          {selectedEmpleado && (
            <div>
              <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" value={selectedEmpleado.id} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Identidad</Form.Label>
                <Form.Control type="text" value={identidad} onChange={(e) => setIdentidad(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleActualizarEmpleado}>Actualizar</Button>
          <Button variant="secondary" onClick={() => setModalShow(false)}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      <Modal show={showNuevoEmpleadoModal} onHide={handleHideNuevoEmpleadoModal}>
        <ModalHeader closeButton>
          Nuevo Empleado
        </ModalHeader>
        <ModalBody>
          <NuevoEmpleadoForm onEmpleadoAgregado={handleEmpleadoAgregado} onHide={handleHideNuevoEmpleadoModal} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ConsultaEliminacionEmpleado;
