// Import necessary dependencies and modules
import 'dotenv/config'; // Loads environment variables from a .env file
import 'module-alias/register'; // Sets up module aliases for easier imports
import validateEnv from '@/utils/validateEnv'; // Custom utility for validating environment variables
import App from './app'; // Import the App class
import PostController from '@/resources/post/post.controller'; // Import PostController
import UserController from '@/resources/user/user.controller'; // Import UserController

// Validate environment variables using the custom utility
validateEnv();

// Create an instance of the App class
const app = new App(
    [new PostController(), new UserController()], // Array of controllers for the app
    Number(process.env.PORT) // Port number from environment variables
);

// Start listening on the specified port
app.listen();
