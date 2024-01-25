import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import EmployeeList from "./component/EmployeeList";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import DepartmentList from "./component/DepartmentList";
import AddDepartment from "./component/AddDepartment";
import EditDepartment from "./component/EditDepartment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<><Navbar/><Dashboard/></>}/>
        <Route path="employees" element={<><Navbar/><EmployeeList/></>}/>
        <Route path="employees/add" element={<><Navbar/><AddEmployee/></>}/>
        <Route path="employees/edit/:id" element={<><Navbar/><EditEmployee/></>}/>
        <Route path="departments" element={<><Navbar/><DepartmentList/></>}/>
        <Route path="departments/add_department" element={<><Navbar/><AddDepartment/></>}/>
        <Route path="departments/edit_department/:id" element={<><Navbar/><EditDepartment/></>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
