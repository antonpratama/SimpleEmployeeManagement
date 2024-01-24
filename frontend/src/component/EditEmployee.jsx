import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [departmentId, setDepartmentId] = useState(1);
    const [position, setPosition] = useState("");
    const [hire_date, setHire_date] = useState(new Date());

    const navigate = useNavigate();
    const {id} =  useParams();

    useEffect(() => {
        getEmployeeById();
    }, []);

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/employees/${id}`,{
                name,
                email,
                phone,
                departmentId,
                position,
                hire_date
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    const getEmployeeById = async () => {
        const response = await axios.get(`http://localhost:5000/employees/${id}`);
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setDepartmentId(response.data.departmentId);
        setPosition(response.data.position);
        setHire_date(new Date(response.data.hire_date));
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateEmployee}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" 
                               className="input" 
                               value={name} 
                               onChange={(e) => setName(e.target.value)} 
                               placeholder="Name"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="email" 
                                className="input" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}  
                                placeholder="Email"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Phone</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Phone"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Department</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={departmentId} 
                                    onChange={(e) => setDepartmentId(e.target.value)} >
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Position</label>
                    <div className="control">
                        <input type="text" className="input"
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)} 
                         placeholder="Position"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hire Date</label>
                    <div className="control">
                        <input type="date" className="input" 
                        value={hire_date} 
                        onChange={(e) => setHire_date(e.target.value)} 
                        placeholder="Hire Date"/>
                    </div>
                </div>
                <div className="field">                    
                    <button type="submit" className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditEmployee