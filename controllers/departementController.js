import Departement from "../models/departement.js"
import departementValidation from "../validations/departementValidation.js"


const createOneDepartement = (req, res) => {
    const {body} = req

    const {error} = departementValidation(body)
    if(error) return res.status(401).json(error.details[0].message)
    
    Departement.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateDepartement (req, res){
    const {departementId} = req.params
    const {body} = req

    const {error} = departementValidation(body)
    if(error) return res.status(401).json(error)

    try{
        const departement = await Departement.findByPk(departementId)

        if(!departement){
            return res.status(401).json({message: 'Departement non trouvé'})
        }

        if(body.nom){
            departement.nom = body.nom
        }

        await departement.save()

        return res.status(200).json({message: 'Departement mis à jour avec succés.'})
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur'})
    }
}

export { createOneDepartement, updateDepartement }