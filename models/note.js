import sequilize from "sequelize";
import database from "../database/database.js";
import Cour from "./cour.js";
import Etudiant from "./etudiant.js";

const { DataTypes} = sequilize

const Note= database.define('note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Note.belongsTo(Cour)
Note.belongsTo(Etudiant)

export default Note