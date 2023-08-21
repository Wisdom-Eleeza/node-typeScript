// Import the Router type from the Express.js library
import { Router } from 'express';

// Define an interface named Controller
interface Controller {
    path: string; // Define a property 'path' of type string. This property suggests that it will hold the base URL path for the routes handled by the controller.
    router: Router; // Define a property 'router' of type Router from Express.js
}

export default Controller; // Export the Controller interface
