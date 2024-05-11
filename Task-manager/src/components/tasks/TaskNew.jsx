import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import AuthContext from "../../AuthContext";
import TaskService from "../../services/task-service";
import { useDataAxios } from "./../../http-common";

/*
 * Component to create a new task.
 */
function TaskNew(props) {
  const http = useDataAxios();
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [toggleReminder, setToggleReminder] = useState(false);
  const [day, setDay] = useState(null);

  const onChangeDay = (e) => {
    const value = e.target.value;
    setDay(value);
  };

  const onChangeToggleReminder = (e) => {
    setToggleReminder(!toggleReminder);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await TaskService.createNewTask(
        http,
        e.target.tasktext.value,
        e.target.description.value,
        day,
        toggleReminder
      );
      setErrorMessage(null);
      // redirect to list of tasks
      navigate("/tasks/" + response.data.id);
    } catch (error) {
      // Authentication was unsuccessful
      setErrorMessage(error.message);
    }
  };

  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col cxs={12} md={8}>
          {errorMessage != null ? (
            <h5 className="text-danger mt-2 text-center">{errorMessage}</h5>
          ) : (
            <></>
          )}
          <Form onSubmit={onSubmit}>
            <Card>
              <Card.Header>
                <Nav>
                  <Nav.Item>
                    <h3>Create a new task</h3>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <Button variant="success" type="submit">
                      Save
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/tasks"
                      className="ms-2 btn btn-outline-dark"
                      role="button"
                    >
                      Cancel
                    </Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-0">
                  <Form.Label>Text</Form.Label>
                  <Form.Control name="tasktext" as="input" />
                  <Form.Text className="text-muted">
                    Give the task a clear name.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control name="description" as="textarea" rows="9" />
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Do task until</Form.Label>
                  <Nav className="mt-2">
                    <Nav.Item>
                      <Form.Control
                        type="date"
                        id="day-picker"
                        label="day"
                        onChange={onChangeDay}
                      />
                    </Nav.Item>
                    <Nav.Item className="ms-4">
                      <Form.Check
                        className="mt-2"
                        type="switch"
                        id="reminder-switch"
                        label="remind me"
                        checked={toggleReminder}
                        onChange={onChangeToggleReminder}
                      />
                    </Nav.Item>
                  </Nav>
                  <Form.Text className="text-muted">
                    Choose a date by which the task should be completed. Toogle
                    switch on if you want a reminder.
                  </Form.Text>
                </Form.Group>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskNew;
