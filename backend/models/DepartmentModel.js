import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Employee from "./EmployeeModel.js";

const {DataTypes} = Sequelize;

const Department = db.define('department', {
    name: DataTypes.STRING,
    description: DataTypes.STRING    
},{
    freezeTableName: true
});

Department.hasMany(Employee);

export default Department;

(async() => {
    await db.sync();
})();