import express, { Application } from 'express'; // Import Express.js and its types
import mongoose from 'mongoose'; // Import Mongoose for MongoDB interactions
import compression from 'compression'; // Middleware for compressing responses
import cors from 'cors'; // Middleware for handling Cross-Origin Resource Sharing
import morgan from 'morgan'; // Middleware for logging HTTP requests
import Controller from '@/utils/interfaces/controller.interface'; // Import a custom Controller interface
import ErrorMiddleware from '@/middleware/error.middleware'; // Import custom error handling middleware
import helmet from 'helmet'; // Middleware for adding security-related HTTP headers

class App {
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.express = express(); // Initialize Express.js
        this.port = port;

        this.initializeDatabaseConnection(); // Initialize the MongoDB connection
        this.initializeMiddleware(); // Set up various middleware
        this.initializeControllers(controllers); // Set up route controllers
        this.initializeErrorHandling(); // Set up error handling middleware
    }

    private initializeMiddleware(): void {
        this.express.use(helmet()); // Set security-related HTTP headers
        this.express.use(cors()); // Enable CORS for cross-origin requests
        this.express.use(morgan('dev')); // Log HTTP requests to the console
        this.express.use(express.json()); // Parse JSON request bodies
        this.express.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies
        this.express.use(compression()); // Compress responses to save bandwidth
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router); // Mount controller routes under '/api'
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(ErrorMiddleware); // Use custom error handling middleware
    }

    private initializeDatabaseConnection(): void {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

        mongoose.connect(
            `mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
        ); // Connect to MongoDB using provided credentials and path
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App; // Export the App class
