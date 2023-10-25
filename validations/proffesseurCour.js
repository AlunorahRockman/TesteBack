import Joi from "joi";

const proffesseurCourValidation = (body) => {
    const proffesseurCourSchema = Joi.object({
        date: Joi.date().required().messages({
            'date.base': 'La date doit être une date valide',
            'any.required': 'La date est obligatoire'
        })
    })
    return proffesseurCourSchema.validate(body)
}

export default proffesseurCourValidation