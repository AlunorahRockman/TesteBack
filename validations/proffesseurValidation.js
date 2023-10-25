import Joi from "joi";

const proffesseurValidation = (body) =>{
    const proffesseurSchema = Joi.object({
        nom: Joi.string().min(3).max(40).trim().required().messages({
            'string.base': 'Le nom doit être une chine de catactère',
            'string.empty': 'Le nom ne doit pas être vide',
            'string.min': 'Le nom doit contenir au moins {#limit} caractère',
            'string.max': 'Le nom doit contenir au plus [{limit} caractère',
            'any.required': 'Le nom est obligatoire'
        }),
        email: Joi.string().min(6).max(40).email().trim().required().messages({
            'string.base': 'L\'email doit être une chaîne de caractère',
            'string.empty': 'L\'email ne doit pas être vide',
            'string.min': 'L\'email doit contenir au moins {#limit} caractère',
            'string.max': 'L\'email doit contenir au plus {#limit} caractère',
            'string.email': 'L\'email doit être une adresse email valide',
            'any.required': 'L\'email est obligatoire'
        }),
        adresse: Joi.string().min(3).max(40).trim().required().messages({
            'string.base': 'L\'adresse doit être une chaine de caractère',
            'string.empty': 'L\'adresse ne doit pas être vide',
            'string.min': 'L\'adresse doit contenir au moins {#limit} caractère',
            'string.max': 'L\'adresse doit contenir au plus {#limit} caractère',
            'any.required': 'L\'adresse est obligatoire'
        }),
        numero: Joi.string().min(15).max(20).trim().required().messages({
            'string.base': 'Le numero doit être une chaine de caractère',
            'string.empty': 'Le numero ne doit pas être vide',
            'string.min': 'Le numero doit contenir au moins {#limit} caractère',
            'string.max': 'Le numero doit contenir au plus {#limit} caractère',
            'any.required': 'Le numero est obligatoire'
        }),
        estVisiteur: Joi.boolean().required({
            'boolean.base': 'estVisiteur doit être un booléen',
            'any.required': 'estVisiteur est obligatoire'
        })
    })
    return proffesseurSchema.validate(body)
}

export default proffesseurValidation