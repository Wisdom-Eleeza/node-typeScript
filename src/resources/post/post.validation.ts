import Joi from 'joi'; // Import the Joi library for data validation

// Define a validation schema named 'create' for creating a post
const create = Joi.object({
    title: Joi.string().required(), // Define a required string field for the post title
    body: Joi.string().required(), // Define a required string field for the post body
});

// Export the 'create' validation schema
export default { create };
