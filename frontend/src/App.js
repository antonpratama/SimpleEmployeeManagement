import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="add" element={<AddEmployee/>}/>
        <Route path="edit/:id" element={<EditEmployee/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
