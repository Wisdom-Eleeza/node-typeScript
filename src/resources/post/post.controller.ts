import { Router, Request, Response, NextFunction } from 'express'; // Import necessary modules and types
import Controller from '@/utils/interfaces/controller.interface'; // Import the Controller interface
import HttpException from '@/utils/exceptions/http.exception'; // Import the HttpException class for custom errors
import validationMiddleware from '@/middleware/validation.middleware'; // Import the validationMiddleware
import validate from '@/resources/post/post.validation'; // Import the post validation schema
import PostService from '@/resources/post/post.service'; // Import the PostService

// Create a class named PostController that implements the Controller interface
class PostController implements Controller {
    public path = '/posts'; // The base path for post-related routes
    public router = Router(); // Create a router instance for this controller
    private PostService = new PostService(); // Create an instance of the PostService

    constructor() {
        this.initialiseRoutes(); // Initialize the controller's routes
    }

    // Method to initialize the routes for this controller
    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        ); // Route for creating a new post
    }

    // Handler for creating a new post route
    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { title, body } = req.body;

            // Call the create method of the PostService to create a new post
            const post = await this.PostService.create(title, body);

            res.status(201).json({ post }); // Send a response with the created post
        } catch (error) {
            next(new HttpException(400, 'Cannot create post')); // Handle errors by passing them to the error middleware
        }
    };
}

export default PostController; // Export the PostController class
