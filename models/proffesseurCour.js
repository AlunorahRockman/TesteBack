import sequelize from "sequelize";
import database from "../database/database.js";
import Cour from "./cour.js";
import Proffesseur from "./proffesseur.js";

const { DataTypes} = sequelize

const ProffesseurCour = database.define('proffesseurCour', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

ProffesseurCour.belongsTo(Cour)
ProffesseurCour.belongsTo(Proffesseur)

export default ProffesseurCour