import Joi from "joi";

const departementValidation = (body) => {
    const departementSchema = Joi.object({
        nom: Joi.string().min(3).max(40).trim().required().messages({
            'string.base': 'Le nom du departement doit être une chaine de caractère',
            'string.empty': 'Le nom du departement ne doit pas être vide',
            'string.min': 'Le nom du departement doit contenir au moins {#limit} caractères',
            'string.max': 'Le nom du departement doit contenir au plus {#limit} caractères',
            'any.required': 'Le nom est obligatoire'
        })
    })
    return departementSchema.validate(body)
}

export default departementValidation