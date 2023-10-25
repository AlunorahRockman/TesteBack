import Proffesseur from "../models/proffesseur.js"
import proffesseurValidation from "../validations/proffesseurValidation.js"


const createOneProffesseur = (req, res) => {
    const {body} = req

    const {error} = proffesseurValidation(body)
    if(error) return res.status(401).json(error)

    Proffesseur.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateProffesseur (req, res) {
    const {proffesseurId} = req.params
    const {body} = req

    const {error} = proffesseurValidation(body)
    if(error) return res.status(401).json(error)

    try{
        const proffesseur = await Proffesseur.findByPk(proffesseurId)

        if(!proffesseur){
            return res.status(401).json({message: 'Proffesseur non trouvé'})
        }

        if(body.nom){
            proffesseur.nom = body.nom
        }

        if(body.email){
            proffesseur.email = body.email
        }

        if(body.adresse){
            proffesseur.adresse = body.adresse
        }

        if(body.numero){
            proffesseur.numero = body.numero
        }

        await proffesseur.save()

        return res.status(200).json({message: 'Proffesseur mise à jour avec succés.'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur.'})
    }
}

export { createOneProffesseur, updateProffesseur }