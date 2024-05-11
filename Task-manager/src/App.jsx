
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./components/Home";
import Tasks from "./components/tasks/Tasks";
import TaskId from "./components/tasks/TaskId";
import TaskNew from "./components/tasks/TaskNew";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterForm from "./components/user/RegisterForm";
import LoginForm from "./components/user/LoginForm";
import NotFound from "./components/NotFound";
import {AuthProvider} from "./AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/tasks/:id" element={<TaskId />} />
            <Route path="/tasks/new" element={<TaskNew />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;