import Note from "../models/note.js"
import noteValidation from "../validations/noteValidation.js"


const createOneNote = (req, res) => {
    const {body} = req

     const {error} = noteValidation(body)
     if(error) return res.status(401).json(error)

     Note.create({...body})
     .then(() => {
        res.status(201).json({msg: 'Created ressource'})
     })
     .catch(error => res.status(500).json(error))
}

async function updateNote (req, res){
   const {noteId} = req.params
   const {body} = req

   const {error} = noteValidation(body)
   if(error) return res.status(401).json(error)

   try{
      const note = await Note.findByPk(noteId)

      if(!note){
         return res.status(401).json({message: 'Note non trouvé'})
      }

      if(body.note){
         note.note = body.note
      }

      if(body.description){
         note.description = body.description
      }

      await note.save()

      return res.status(200).json({message: 'Note mise à jour avec succé.'})

   }
   catch(error){
      console.log(error)
      return res.status(500).json({message: 'Erreur du serveur'})
   }
}


export { createOneNote }