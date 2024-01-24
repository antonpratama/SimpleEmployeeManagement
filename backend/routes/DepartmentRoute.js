import express from "express";
import {getDepartments,
        getDepartmentById,        
        createDepartment,
        updateDepartment,
        deleteDepartment
} from "../controller/DepartmentController.js";

const router = express.Router();

router.get('/depatments', getDepartments);
router.get('/depatments/:id', getDepartmentById);
router.post('/depatments', createDepartment);
router.patch('/depatments/:id', updateDepartment);
router.delete('/depatments/:id', deleteDepartment);

export default router;