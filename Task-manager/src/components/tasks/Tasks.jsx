import {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import TaskService from "../../services/task-service";
import {useDataAxios} from "./../../http-common";

import AuthContext from "../../AuthContext";
// Embedded components
import TasksList from "./TasksList";

/*
 * Main Component for the list of user tasks .
 * This component contains sub components to set a tasks filter
 * and to list all tasks (as table).
 */
function Tasks(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("Tasks search params=", searchParams);
  const navigate = useNavigate();
  const http = useDataAxios();
  const {loggedInUser} = useContext(AuthContext);
  const [openTasks, setOpenTasks] = useState([]);
  const [closedTasks, setClosedTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [isOpenTasks, setIsOpenTasks] = useState(true);
  const [requestQuery, setRequestQuery] = useState("is:open");
  const [requestFilter, setRequestFilter] = useState("");
  const [requestSort, setRequestSort] = useState("");

  const switchIsOpenTasks = isOpen => {
    setRequestFilter("");
    setRequestSort("");
    setIsOpenTasks(isOpen);
  };

  const handleOnSelectTask = taskId => {
    navigate("/tasks/" + taskId);
  };

  const handleOnSearchTasks = () => {
    var query =
      (isOpenTasks ? "is:open" : "is:closed") +
      (requestFilter.length > 0 ? "&" : "") +
      requestFilter +
      (requestSort.length > 0 ? "&" : "") +
      requestSort;
    console.log("navigate to /tasks?query=" + query);
    navigate("/tasks?query=" + query);
  };

  const handleOnFilterTasks = filter => {
    setRequestFilter(filter);
  };

  const handleOnSortTasks = sort => {
    setRequestSort(sort);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchTasks();
  }, [searchParams]);

  useEffect(() => {
    var query =
      (isOpenTasks ? "is:open" : "is:closed") +
      (requestFilter.length > 0 ? "&" : "") +
      requestFilter +
      (requestSort.length > 0 ? "&" : "") +
      requestSort;
    setRequestQuery(query);
  }, [isOpenTasks, requestFilter, requestSort]);

  useEffect(() => {
    console.log("useEffect isOpenTasks");
    handleOnSearchTasks();
  }, [isOpenTasks]);

  const fetchTasks = async () => {
    console.log("fetchTasks=", searchParams);
    const response = await TaskService.getTasks(http, searchParams);
    console.log("fetchTasks response=", response);
    setTaskList(response.data.taskList._embedded.tasks);
  };

  return (
    <>
      <TasksList
        tasks={taskList}
        countOpen={openTasks.length}
        countClosed={closedTasks.length}
        handleOnSelectTask={handleOnSelectTask}
        handleOnSearchTasks={handleOnSearchTasks}
        handleOnFilterTasks={handleOnFilterTasks}
        handleOnSortTasks={handleOnSortTasks}
        handleIsOpenTasks={switchIsOpenTasks}
        requestQuery={requestQuery}
      />
    </>
  );
}

export default Tasks;