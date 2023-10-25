import { Sequelize } from "sequelize"; 

export default new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})