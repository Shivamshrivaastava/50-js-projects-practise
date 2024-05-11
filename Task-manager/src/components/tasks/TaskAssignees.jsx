import Nav from "react-bootstrap/Nav";
import TaskAssigneesSelection from "./TaskAssigneesSelection";

function TaskAssignees({task, handleOnChangeTask}) {
  return (
    <>
      <Nav>
        <Nav.Item>
          <b>Assignees</b>
        </Nav.Item>
        <Nav.Item className="ms-auto">
          <TaskAssigneesSelection
            task={task}
            handleOnChangeTask={handleOnChangeTask}
          />
        </Nav.Item>
      </Nav>
      {task.assignees.map(x => x.username).join(", ")}
    </>
  );
}

export default TaskAssignees;