import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Department = db.define('department', {
    name: DataTypes.STRING,
    description: DataTypes.STRING    
},{
    freezeTableName: true
});

export default Department;

(async() => {
    await db.sync();
})();