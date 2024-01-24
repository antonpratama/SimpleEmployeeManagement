import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Employee = db.define('employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    departmentId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'department',
            key: 'id'
        }
    },
    position: DataTypes.STRING,
    hire_date: DataTypes.DATE
},{
    freezeTableName: true
});

export default Employee;

(async() => {
    await db.sync();
})();