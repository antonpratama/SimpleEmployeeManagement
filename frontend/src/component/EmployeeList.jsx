import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    },[]);

    const getEmployees = async () => {
        const response =  await axios.get('http://localhost:5000/employees');        
        setEmployees(response.data);
    }

    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/employees/${id}`);
            getEmployees();            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">
                Add New Employee
            </Link>            
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Hire Date</th>
                        <th>Action</th>                        
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.department.name}</td>
                            <td>{employee.position}</td>
                            <td>{new Date(employee.hire_date).toLocaleDateString()}</td>
                            <td>
                                <Link to={`edit/${employee.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteEmployee(employee.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmployeeList