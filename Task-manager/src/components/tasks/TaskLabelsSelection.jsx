import {
    Gear,
    XCircle,
    CheckLg,
    DashCircle,
    PlusCircle
  } from "react-bootstrap-icons";
  import {useState, useEffect, useContext} from "react";
  import TaskService from "../../services/task-service";
  import {useDataAxios} from "./../../http-common";
  
  import Button from "react-bootstrap/Button";
  import Popover from "react-bootstrap/Popover";
  import OverlayTrigger from "react-bootstrap/OverlayTrigger";
  import ListGroup from "react-bootstrap/ListGroup";
  
  import TaskLabel from "./TaskLabel";
  
  import AuthContext from "../../AuthContext";
  
  /*
   * Popover component in order to manage the list of labels.
   */
  function TaskLabelsSelection({task, handleOnChangeTask}) {
    const http = useDataAxios();
    const {loggedInUser} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [labels, setLabels] = useState(task.labels);
  
    const handleClick = event => {
      setShow(!show);
      setTarget(event.target);
    };
  
    useEffect(() => {}, []);
  
    useEffect(() => {
      if (show) {
        updateLabels();
      }
    }, [labels]);
  
    const updateLabels = async () => {
      const response = await TaskService.changeLabelsOfTaskById(
        http,
        task.id,
        labels
      );
      handleOnChangeTask(response.data); // refresh page with updated task
    };
  
    function clearAllLabels() {
      setLabels([]);
      document.body.click(); // hide the popover
    }
  
    function addLabel(label) {
      setLabels([...labels, label]);
      document.body.click();
    }
  
    function removeLabel(label) {
      setLabels(labels.filter(item => item !== label));
      document.body.click();
    }
  
    const popover = (
      <Popover id="labellist">
        <Popover.Header as="h6">assign labels to this task</Popover.Header>
        <Popover.Body>
          <ListGroup>
            <ListGroup.Item key="0" action onClick={clearAllLabels}>
              <XCircle />
              <span className="ms-2">clear all labels</span>
            </ListGroup.Item>
            {[
              "documentation",
              "enhancement",
              "bug",
              "duplicate",
              "good first issue",
              "help wanted",
              "invalid",
              "question",
              "all others"
            ].map(label =>
              task.labels.includes(label) ? (
                <ListGroup.Item
                  key={label}
                  action
                  onClick={() => removeLabel(label)}
                >
                  <CheckLg />
                  <TaskLabel label={label} short={false} />
                </ListGroup.Item>
              ) : (
                <ListGroup.Item
                  key={label}
                  action
                  onClick={() => addLabel(label)}
                >
                  <TaskLabel label={label} short={false} />
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
  
  export default TaskLabelsSelection;