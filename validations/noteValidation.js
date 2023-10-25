import Joi from "joi";

const noteValidation = (body) => {
    const noteSchema = Joi.object({
        note: Joi.number().required().messages({
            'number.base': 'La note doit etre un nombre entier',
            'any.required': 'La note est obligatoire'
        }),
        description: Joi.string().min(6).max(20).trim().required().messages({
            'string.base': 'La description doit être une chaine de caractère',
            'string.empty': 'La description ne doit pas être vide',
            'string.min': 'La description doit contenir au moins {#limit} caractère',
            'string.max': 'La description doit contenir au plus {#limit} caractère',
            'any.required': 'La description est obligatoire'
        })
    })
    return noteSchema.validate(body)
}

export default noteValidation