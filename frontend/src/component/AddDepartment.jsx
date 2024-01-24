import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");        

    const navigate = useNavigate();

    const saveDepartment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/departments',{
                name,
                description            
            });
            navigate("/departments");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveDepartment}>
                <div className="field">
                    <label className="label">Description Name</label>
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
                    <button type="submit" className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddDepartment