// Import necessary functions and types from the envalid library
import { cleanEnv, str, port } from 'envalid';

// Define a function to validate environment variables
function validateEnv(): void {
    // Use the cleanEnv function to validate environment variables
    // Pass process.env (all environment variables) and an object defining validation rules
    cleanEnv(process.env, {
        // Validate the NODE_ENV environment variable as a string
        // It must match either 'development' or 'production'
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),

        // Validate the MONGO_PASSWORD environment variable as a non-empty string
        MONGO_PASSWORD: str(),

        // Validate the MONGO_PATH environment variable as a non-empty string
        MONGO_PATH: str(),

        // Validate the MONGO_USER environment variable as a non-empty string
        MONGO_USER: str(),

        // Validate the PORT environment variable as a valid port number
        // If not set, default to port 3000
        PORT: port({ default: 3000 }),
    });
}

// Export the validateEnv function for use in other parts of the application
export default validateEnv;
