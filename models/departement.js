import sequelize from "sequelize";
import database from "../database/database.js";

const {DataTypes} = sequelize

const Departement = database.define('departement', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default Departement