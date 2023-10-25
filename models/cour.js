import sequelize from 'sequelize';
import database from "../database/database.js";


const { DataTypes } = sequelize

const Cour = database.define('cour', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    credi: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Cour



