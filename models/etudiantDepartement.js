import sequilize from "sequelize";
import database from "../database/database.js";
import Etudiant from "./etudiant.js";
import Departement from "./departement.js";


const {DataTypes} = sequilize

const EtudiantDepartement = database.define('etudiantDepartement', {
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

EtudiantDepartement.belongsTo(Etudiant)
EtudiantDepartement.belongsTo(Departement)

export default EtudiantDepartement