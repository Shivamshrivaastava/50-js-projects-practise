class UserService {
  getAllUsers(http) {
    return http.get("/api/users");
  }
}

export default new UserService();
