import EtudiantDepartement from "../models/etudiantDepartement.js"
import etudiantDepartementValidation from "../validations/etudiantDepartementValidation.js"


const createOneEtudiantDepartement = (req, res) => {
    const {body} = req

    const {error} = etudiantDepartementValidation(body)
    if(error) return res.status(401).json(error)

    EtudiantDepartement.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateEtudiantDepartement (req, res){
    const {etudiantDepartementId} = req.params
    const {body} = req

    const {error} = etudiantDepartementValidation(body)
    if(error) return res.status(401).json(error)

    try{

        const etudiantDepartement = await EtudiantDepartement.findByPk(etudiantDepartementId)

        if(!etudiantDepartement){
            return res.status(401).json({message: 'EtudiantDepartement non trouvé'})
        }

        if(body.date){
            etudiantDepartement.date = body.date
        }

        await etudiantDepartement.save()

        return res.status(200).json({message: 'EtudiantDeprtement mise à jour avec succés'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message: "Erreur du serveur"})
    }
}

export { createOneEtudiantDepartement, updateEtudiantDepartement }