import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditDepartment = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");        

    const navigate = useNavigate();

    const {id} =  useParams();

    useEffect(() => {
        getDepartmentById();
    }, []);

    const updateDepartment = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/departments/${id}`,{
                name,
                description               
            });
            navigate("/departments");
        } catch (error) {
            console.log(error)
        }
    }

    const getDepartmentById = async () => {
        const response = await axios.get(`http://localhost:5000/departments/${id}`);
        console.log(response);
        setName(response.data.name);
        setDescription(response.data.description);        
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateDepartment}>
                <div className="field">
                    <label className="label">Department Name</label>
                    <div className="control">
                        <input type="text" 
                               className="input" 
                               value={name} 
                               onChange={(e) => setName(e.target.value)} 
                               placeholder="Name"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input type="text" 
                                className="input" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}  
                                placeholder="Description"/>
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

export default EditDepartment