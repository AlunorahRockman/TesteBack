import Joi from "joi";


const etudiantDepartementValidation = (body) => {
    const etudiantDepartementSchema = Joi.object({
        date: Joi.date().required().messages({
            'date.base': 'La date doit être une date valide',
            'any.required': 'La date est obligatoire'
        })
    })
    return etudiantDepartementSchema.validate(date)
}

export default etudiantDepartementValidation