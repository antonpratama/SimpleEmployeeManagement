import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Department from "./DepartmentModel.js";

const {DataTypes} = Sequelize;

const Employee = db.define('employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        // references: {
        //     model: 'department',
        //     key: 'id'
        // }
    },
    position: DataTypes.STRING,
    hire_date: DataTypes.DATE
},{
    freezeTableName: true
});

Department.hasMany(Employee);
Employee.belongsTo(Department, {foreignKey: 'departmentId'});

export default Employee;

(async() => {
    await db.sync();
})();