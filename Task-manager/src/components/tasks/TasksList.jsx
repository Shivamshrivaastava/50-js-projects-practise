import { RecordCircle, Check2 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/NavDropdown";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FilterHeader({ countOpen, countClosed, handleIsOpenTasks }) {
  return (
    <Container className="p-2">
      <Nav>
        <Nav.Item>
          <Nav.Link type="button" onClick={() => handleIsOpenTasks(true)}>
            <RecordCircle />
            <span className="ms-2">{countOpen}</span> Open
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link type="button" onClick={() => handleIsOpenTasks(false)}>
            <Check2 /> <span className="ms-2">{countClosed}</span> Closed
          </Nav.Link>
        </Nav.Item>
        <Link to="/tasks/new" className="ms-auto btn btn-success" role="button">
          New Tasks
        </Link>
      </Nav>
    </Container>
  );
}

function SearchForm({ requestQuery, handleOnSearchTasks }) {
  return (
    <Form>
      <InputGroup className="mb-0">
        <FormControl
          type="text"
          as="input"
          readOnly={true}
          value={requestQuery}
        />
        <Button
          variant="outline-secondary"
          onClick={() => handleOnSearchTasks()}
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

function FilterDroplist({ handleOnFilterTasks }) {
  return (
    <Dropdown as={NavItem} title="Filter">
      <Dropdown.Item onClick={() => handleOnFilterTasks("")}>
        Clear Filter
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnFilterTasks("reportedby:@me")}>
        Your Tasks
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnFilterTasks("assignedto:@me")}>
        Everything assigned to you
      </Dropdown.Item>
    </Dropdown>
  );
}

function Sort({ handleOnSortTasks }) {
  return (
    <Dropdown as={NavItem} title="Sort by">
      <Dropdown.Item onClick={() => handleOnSortTasks("sort:creation")}>
        creation date
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnSortTasks("sort:reporter")}>
        reporter
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnSortTasks("sort:assignee")}>
        assignee
      </Dropdown.Item>
    </Dropdown>
  );
}

function CardHeader({
  requestQuery,
  handleOnSearchTasks,
  handleOnFilterTasks,
  handleOnSortTasks,
}) {
  return (
    <Row>
      <Col xs={12} md={2}>
        <FilterDroplist handleOnFilterTasks={handleOnFilterTasks} />
      </Col>
      <Col xs={12} md={8}>
        <SearchForm
          requestQuery={requestQuery}
          handleOnSearchTasks={handleOnSearchTasks}
        />
      </Col>
      <Col xs={12} md={2}>
        <Sort handleOnSortTasks={handleOnSortTasks} />
      </Col>
    </Row>
  );
}

function TaskRow({ task, handleOnSelectTask }) {
  return (
    <tr key={task.id} onClick={() => handleOnSelectTask(task.id)}>
      {/* a click on the tr navigates to /users/:id */}
      <td>
        <b>{task.text}</b>
        <small>
          <p>
            #{task.id} reported by {task.reportedBy.username}
          </p>
        </small>
      </td>
      <td></td>
      <td align="right">{task.assignees.map((x) => x.username).join(", ")}</td>
    </tr>
  );
}

function CardBody({ tasks, handleOnSelectTask }) {
  return (
    <Table className="table-hover fs-6" size="sm">
      <tbody>
        {tasks.map((task) => {
          console.log("task=", task);
          return (
            <TaskRow
              key={task.id}
              task={task}
              handleOnSelectTask={handleOnSelectTask}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

function TasksList({
  tasks,
  countOpen,
  countClosed,
  handleOnSelectTask,
  handleOnSearchTasks,
  handleOnFilterTasks,
  handleOnSortTasks,
  handleIsOpenTasks,
  requestQuery,
}) {
  return (
    <Container>
      <FilterHeader
        countOpen={countOpen}
        countClosed={countClosed}
        handleIsOpenTasks={handleIsOpenTasks}
      />
      <Card>
        <Card.Header>
          <CardHeader
            requestQuery={requestQuery}
            handleOnSearchTasks={handleOnSearchTasks}
            handleOnFilterTasks={handleOnFilterTasks}
            handleOnSortTasks={handleOnSortTasks}
          />
        </Card.Header>
        <Card.Body>
          <CardBody tasks={tasks} handleOnSelectTask={handleOnSelectTask} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TasksList;
