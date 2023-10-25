import Joi from "joi";

const etudiantCourValidation = (body) => {
    const etudiantCourSchema = Joi.object({
        date: Joi.date().required().messages({
            'date.base': 'La date doit être une date valide',
            'any.required': 'La date est obligatoire'
        })
    })
    return etudiantCourSchema.validate(body)
}

export default etudiantCourValidation