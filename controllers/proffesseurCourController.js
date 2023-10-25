import ProffesseurCour from "../models/proffesseurCour.js"
import proffesseurCourValidation from "../validations/proffesseurCour.js"


const createOneProffesseurCour = (req, res) => {
    const {body} = req

    const {error} = proffesseurCourValidation(body)
    if (error) return res.status(401).json(error)

    ProffesseurCour.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateProffesseurCour (req, res){
    const {proffesseurCourId} = req.params
    const {body} = req

    const {error} = proffesseurCourValidation(body)
    if(error) return res.status(401).json(error)

    try{

    }
    catch(error){
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur'})
    }
}

export { createOneProffesseurCour }