class TaskService {
    async getAllTasks(http) {
      return await http.get("/api/tasks");
    }
  
    async getTasks(http, query) {
      return await http.get("/api/tasks?" + query);
    }
  
    async getTaskById(http, id) {
      return await http.get("/api/tasks/" + id);
    }
  
    async changeTaskById(
      http,
      id,
      text,
      description,
      day,
      toggleReminder,
      state
    ) {
      const body = {
        text: text,
        description: description,
        day: day,
        reminder: toggleReminder,
        state: state
      };
      return await http.put("/api/tasks/" + id, JSON.stringify(body));
    }
  
    async changeAssigneesOfTaskById(http, id, assignees) {
      return await http.put(
        "/api/tasks/" + id + "/assignees",
        JSON.stringify(assignees)
      );
    }
  
    async changeLabelsOfTaskById(http, id, labels) {
      return await http.put(
        "/api/tasks/" + id + "/labels",
        JSON.stringify(labels)
      );
    }
  
    async createNewTask(http, text, description, day, toggleReminder) {
      const body = {
        text: text,
        description: description,
        day: day,
        reminder: toggleReminder
      };
      return await http.post("/api/tasks", JSON.stringify(body));
    }
  }
  
  export default new TaskService();
  
  