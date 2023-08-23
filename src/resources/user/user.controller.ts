import { Router, Request, Response, NextFunction } from 'express'; // Import necessary modules and types
import Controller from '@/utils/interfaces/controller.interface'; // Import the Controller interface
import HttpException from '@/utils/exceptions/http.exception'; // Import the HttpException class for custom errors
import validationMiddleware from '@/middleware/validation.middleware'; // Import the validationMiddleware
import validate from '@/resources/user/user.validation'; // Import the user validation schemas
import UserService from '@/resources/user/user.service'; // Import the UserService
import authenticated from '@/middleware/authenticated.middleware'; // Import the authenticated middleware

// Create a class named UserController that implements the Controller interface
class UserController implements Controller {
    public path = '/users'; // The base path for user-related routes
    public router = Router(); // Create a router instance for this controller
    private UserService = new UserService(); // Create an instance of the UserService

    constructor() {
        this.initializeRoutes(); // Initialize the controller's routes
    }

    // Method to initialize the routes for this controller
    private initializeRoutes(): void {
        // Define and set up the routes for this controller
        this.router.post(
            `${this.path}/register`,
            validationMiddleware(validate.register),
            this.register
        ); // Route for user registration
        this.router.post(
            `${this.path}/login`,
            validationMiddleware(validate.login),
            this.login
        ); // Route for user login
        this.router.get(`${this.path}`, authenticated, this.getUser); // Route to get user data
    }

    // Handler for user registration route
    private register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { name, email, password } = req.body;

            // Call the register method of the UserService
            const token = await this.UserService.register(
                name,
                email,
                password,
                'user'
            );

            res.status(201).json({ token }); // Send a response with the generated token
        } catch (error: any) {
            // Handle any errors by passing them to the error middleware
            next(new HttpException(400, error.message));
        }
    };

    // Handler for user login route
    private login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { email, password } = req.body;

            // Call the login method of the UserService
            const token = await this.UserService.login(email, password);

            res.status(200).json({ token }); // Send a response with the generated token
        } catch (error: any) {
            // Handle any errors by passing them to the error middleware
            next(new HttpException(400, error.message));
        }
    };

    // Handler for getting user data route
    private getUser = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        if (!req.user) {
            // If there's no logged in user, return a 404 error
            return next(new HttpException(404, 'No logged in user'));
        }

        res.status(200).send({ data: req.user }); // Send a response with the user data
    };
}

export default UserController; // Export the UserController class
