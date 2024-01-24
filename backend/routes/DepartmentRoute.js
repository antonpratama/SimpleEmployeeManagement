import express from "express";
import {getDepartments,
        getDepartmentById,        
        createDepartment,
        updateDepartment,
        deleteDepartment
} from "../controller/DepartmentController.js";

const DepartmentRoute = express.Router();

DepartmentRoute.get('/departments', getDepartments);
DepartmentRoute.get('/departments/:id', getDepartmentById);
DepartmentRoute.post('/departments', createDepartment);
DepartmentRoute.patch('/departments/:id', updateDepartment);
DepartmentRoute.delete('/departments/:id', deleteDepartment);

export default DepartmentRoute;