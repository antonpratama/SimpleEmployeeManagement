import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const DepartmentList = () => {
    const [departments, setDepartment] = useState([]);

    useEffect(() => {
        getDepartments();
    },[]);

    const getDepartments = async () => {
        const response =  await axios.get('http://localhost:5000/departments');
        setDepartment(response.data);
    }

    const deleteDepartment = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/departments/${id}`);
            getDepartments();            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add_department`} className="button is-success">
                Add New Department
            </Link>            
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>                        
                        <th>Action</th>                        
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department, index) => (
                        <tr key={department.id}>
                            <td>{index + 1}</td>
                            <td>{department.name}</td>
                            <td>{department.description}</td>                            
                            <td>
                                <Link to={`edit_department/${department.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteDepartment(department.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DepartmentList