import Department from "../models/DepartmentModel.js";
import Employee from "../models/EmployeeModel.js";

export const getEmployees = async(req, res) => {
    try {        
        const response = await Employee.findAll({
            include:[{
                model: Department
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getEmployeeById = async(req, res) => {
    try {
        const response = await Employee.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createEmployee = async(req, res) => {
    try {
        await Employee.create(req.body)
        res.status(201).json({msg: "Employee Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateEmployee = async(req, res) => {
    try {
        await Employee.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Employee Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteEmployee = async(req, res) => {
    try {
        await Employee.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Employee Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}