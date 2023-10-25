import EtudiantCour from "../models/etudiantCour.js"
import etudiantCourValidation from "../validations/etudiantCourValidation.js"



const createOneEtudiantCour = (req, res) => {
    const {body} = req

    const {error} = etudiantCourValidation(body)
    if(error) return res.status(401).json(error)
    
    EtudiantCour.create({...body})
    .then(() => {
        res.status(201).json({msg: 'Created ressource'})
    })
    .catch(error => res.status(500).json(error))
}

async function updateEtudiantCour (req, res){
    const {etudiantCourId} = req.params
    const {body} = req

    const {error} = etudiantCourValidation(body)
    if(error) return res.status(401).json(error)

    try{
        const etudiantCour = await EtudiantCour.findByPk(etudiantCourId)

        if(!etudiantCour){
            return res.status(401).json({message: 'EtudiantCour non trouvé.'})
        }

        if(body.date){
            etudiantCour.date = body.date
        }

        await etudiantCour.save()

        return res.status(200).json({message: 'EtudiantCour mise à jour avec succés.'})
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message: 'Erreur du serveur.'})
    }

}

export { createOneEtudiantCour, updateEtudiantCour }