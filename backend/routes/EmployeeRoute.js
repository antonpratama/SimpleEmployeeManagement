import express from "express";
import {getEmployees,
        getEmployeeById,
        createEmployee,
        updateEmployee,
        deleteEmployee
} from "../controller/EmployeeController.js";

const EmployeeRoute = express.Router();

EmployeeRoute.get('/employees', getEmployees);
EmployeeRoute.get('/employees/:id', getEmployeeById);
EmployeeRoute.post('/employees', createEmployee);
EmployeeRoute.patch('/employees/:id', updateEmployee);
EmployeeRoute.delete('/employees/:id', deleteEmployee);

export default EmployeeRoute;