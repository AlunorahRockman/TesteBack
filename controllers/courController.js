import Cour from "../models/cour.js"
import courValidation from "../validations/courValidations.js"


const createOneCour = (req, res) => {
    const {body} = req

    const {error} = courValidation(body)
    if(error) return res.status(401).json(error.details[0].message)

    Cour.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateCour (req, res) {
    const {courId} = req.params
    const {body} = req

    const {error} = courValidation(body)
    if(error) return res.status(401).json(error)

    try{
        const cour = await Cour.findByPk(courId)

        if(!cour){
            return res.status(401).json({message: "Cour non trouvé  "})
        }

        if(body.credi){
            cour.credi = body.credi
        }

        await cour.save()

        return res.status(200).json({message: "Cour mise à jour avec succés."})

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur'})
    }
}

export { createOneCour, updateCour }