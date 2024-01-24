import express from "express";
import {getDepartments,
        getDepartmentById,        
        createDepartment,
        updateDepartment,
        deleteDepartment
} from "../controller/DepartmentController.js";

const DepartmentRoute = express.Router();

DepartmentRoute.get('/depatments', getDepartments);
DepartmentRoute.get('/depatments/:id', getDepartmentById);
DepartmentRoute.post('/depatments', createDepartment);
DepartmentRoute.patch('/depatments/:id', updateDepartment);
DepartmentRoute.delete('/depatments/:id', deleteDepartment);

export default DepartmentRoute;