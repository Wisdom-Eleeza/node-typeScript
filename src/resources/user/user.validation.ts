import Joi from 'joi'; // Import the Joi library for validation

// Define a Joi schema for user registration validation
const registerValidation = Joi.object({
    name: Joi.string().max(30).required(), // Validate name as a required string with a maximum length of 30 characters

    email: Joi.string().email().required(), // Validate email as a required string in email format

    password: Joi.string().min(6).required(), // Validate password as a required string with a minimum length of 6 characters
});

// Define a Joi schema for user login validation
const loginValidation = Joi.object({
    email: Joi.string().required(), // Validate email as a required string

    password: Joi.string().required(), // Validate password as a required string
});

// Export an object containing the validation schemas
export default { registerValidation, loginValidation };
