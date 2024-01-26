import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expired, setExpired] = useState('');
  const [users, setUsers] = useState([]);  
  
  useEffect(() => {
      refreshToken();
  }, []);

  const refreshToken = async() => {
      try {
          const response = await axios.get('http://localhost:5000/token');
          setToken(response.data.accessToken);
          const decoded = jwtDecode(response.data.accessToken);
          setName(decoded.name);
          setExpired(decoded.exp);
      } catch (error) {
          if(error.response){
              navigate("/");
          }
      }
  }

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async(config) => {
      const currentDate = new Date();
      if(expired * 1000 < currentDate.getTime()){
          const response = await axios.get('http://localhost:5000/token');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwtDecode(response.data.accessToken);
          setName(decoded.name);
          setExpired(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  })

    const navigate = useNavigate();
    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">  
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
        </a>
    
        <a href="dashboard" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="dashboard" className="navbar-item">
            Home
          </a>                            
          <a href="employees" className="navbar-item">
            Employees
          </a>                            
          <a href="departments" className="navbar-item">
            Departments
          </a>                            
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">              
              <button onClick={Logout} className="button is-light">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar