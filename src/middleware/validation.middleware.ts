import { Request, Response, NextFunction, RequestHandler } from 'express'; // Import necessary modules and types
import Joi from 'joi'; // Import the Joi library for data validation

function validationMiddleware(schema: Joi.Schema): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const validationOptions = {
            abortEarly: false, // Continue validating all fields even if one fails
            allowUnknown: true, // Allow additional fields not specified in the schema
            stripUnknown: true, // Remove additional fields not specified in the schema
        };

        try {
            const value = await schema.validateAsync(
                req.body,
                validationOptions
            ); // Validate the request body against the schema
            req.body = value; // Replace the request body with the validated value
            next(); // Move to the next middleware or route handler
        } catch (e: any) {
            const errors: string[] = [];
            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message);
            }); // Extract error messages from validation details
            res.status(400).send({ errors: errors }); // Send a response with 400 status and error messages
        }
    };
}

export default validationMiddleware; // Export the middleware function
