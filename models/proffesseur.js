import sequelize from "sequelize";
import database from "../database/database.js";

const { DataTypes} = sequelize

const Proffesseur  = database.define('proffesseur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    estVisiteur: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Proffesseur