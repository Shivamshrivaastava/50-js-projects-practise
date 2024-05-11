import {Gear, XCircle, DashCircle, PlusCircle} from "react-bootstrap-icons";
import {useState, useEffect, useContext} from "react";
import TaskService from "../../services/task-service";
import UserService from "../../services/user-service";
import {useDataAxios} from "./../../http-common";

import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";

import AuthContext from "../../AuthContext";

/*
 * Popover component in order to manage the list of assignees.
 */
function TaskAssigneesSelection({task, handleOnChangeTask}) {
  const http = useDataAxios();
  const {loggedInUser} = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [assignees, setAssignees] = useState(task.assignees);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = event => {
    setShow(!show);
    setTarget(event.target);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (show) {
      updateAssignees();
    }
  }, [assignees]);

  const fetchUsers = async () => {
    const response = await UserService.getAllUsers(http);
    setUsers(response.data);
  };

  const updateAssignees = async () => {
    const response = await TaskService.changeAssigneesOfTaskById(
      http,
      task.id,
      assignees
    );
    handleOnChangeTask(response.data); // refresh page with updated task
  };

  function clearAllAssignees() {
    setAssignees([]);
    document.body.click(); // hide the popover
  }

  function addAssignee(user) {
    setAssignees([...assignees, user]);
    document.body.click();
  }

  function removeAssignee(user) {
    setAssignees(assignees.filter(item => item.id !== user.id));
    document.body.click();
  }

  const popover = (
    <Popover id="userlist">
      <Popover.Header as="h6">Assign people to this task</Popover.Header>
      <Popover.Body>
        <ListGroup>
          <ListGroup.Item key="0" action onClick={clearAllAssignees}>
            <XCircle />
            <span className="ms-2">clear assignees</span>
          </ListGroup.Item>
          {users.map(user =>
            task.assignees.map(assignee => assignee.id).includes(user.id) ? (
              <ListGroup.Item
                key={user.id}
                action
                onClick={() => removeAssignee(user)}
              >
                <DashCircle />
                <span className="ms-2">{user.username}</span>
              </ListGroup.Item>
            ) : (
              <ListGroup.Item
                key={user.id}
                action
                onClick={() => addAssignee(user)}
              >
                <PlusCircle />
                <span className="ms-2">{user.username}</span>
              </ListGroup.Item>
            )
          )}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      rootClose={true}
      trigger="click"
      placement="bottom"
      overlay={popover}
    >
      <Button variant="light" size="sm" border="light" onClick={handleClick}>
        <Gear />
      </Button>
    </OverlayTrigger>
  );
}

export default TaskAssigneesSelection;