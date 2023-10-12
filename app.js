import express from "express"
import database from "./database/database.js"
import router from "./root/root.js"
import cors from "cors"


const app = express()

app.use(cors({
    origin:'*'
}))
app.use(express.json)
app.use(router)

database.sync()
.then((console.log('Connexion à la bdd')))
.catch(error => console.log(error)) 

app.listen(4000, () => console.log('Port 4000')) 
