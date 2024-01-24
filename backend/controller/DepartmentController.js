import Department from "../models/DepartmentModel.js";

export const getDepartments = async(req, res) => {
    try {
        const response = await Department.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDepartmentById = async(req, res) => {
    try {
        const response = await Department.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createDepartment = async(req, res) => {
    try {
        await Department.create(req.body)
        res.status(201).json({msg: "Department Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDepartment = async(req, res) => {
    try {
        await Department.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Department Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDepartment = async(req, res) => {
    try {
        await Department.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Employee Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}