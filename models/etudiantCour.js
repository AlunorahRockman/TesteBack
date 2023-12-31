import sequilize from "sequelize";
import database from "../database/database.js";
import Cour from "./cour.js";
import Etudiant from "./etudiant.js";


const {DataTypes} = sequilize

const EtudiantCour = database.define('EtudiantCour', {
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

EtudiantCour.belongsTo(Cour)
EtudiantCour.belongsTo(Etudiant)

export default EtudiantCour