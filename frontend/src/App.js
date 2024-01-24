import {BrowserRouter, Routes, Route} from "react-router-dom";
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
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="add" element={<AddEmployee/>}/>
        <Route path="edit/:id" element={<EditEmployee/>}/>
        <Route path="departments" element={<DepartmentList/>}/>
        <Route path="departments/add_department" element={<AddDepartment/>}/>
        <Route path="departments/edit_department/:id" element={<EditDepartment/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
