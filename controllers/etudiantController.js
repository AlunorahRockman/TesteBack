import Etudiant from "../models/etudiant.js"
import etudiantValidation from "../validations/etudiantValidation.js"


const createOneEtudiant = (req, res) => {
    const {body} = req

    const {error} = etudiantValidation(body)
    if(error) return res.status(401).json(error)

    Etudiant.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateEtudiant (req, res){
    const {etudiantId} = req.params
    const {body} = req
    
    const {error} = etudiantValidation(body)
    if(error) return res.status(401).json(error)

    try{
        const etudiant = await Etudiant.findByPk(etudiantId)
        
        if(!etudiant){
            return res.status(401).json({message: 'Etudiant non trouvé.'})
        }

        if(body.nom){
            etudiant.nom = body.nom
        }
        
        if(body.email){
            etudiant.email = body.email
        }

        if(body.adresse){
            etudiant.adresse = body.adresse
        }

        if(body.numero){
            etudiant.numero = body.numero
        }

        await etudiant.save()

        return res.status(200).json({message: 'Etudiant mise à jour avec succés.'})
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur'})
    }
}

export { createOneEtudiant, updateEtudiant }