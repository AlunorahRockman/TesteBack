import Joi from "joi";

const courValidation = (body) => {
    const courSchema = Joi.object({
        credi: Joi.number().integer().required().messages({
            'number.base': 'La credi doit être un nombre entier',
            'any.required': 'La credi est obligatoire'
        })
    })
    return courSchema.validate(body)
}

export default courValidation