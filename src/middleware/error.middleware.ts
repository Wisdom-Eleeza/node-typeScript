import { Request, Response, NextFunction } from 'express'; // Import necessary modules and types
import HttpException from '@/utils/exceptions/http.exception'; // Import the HttpException class

function errorMiddleware(
    error: HttpException,
    req: Request,
    res: Response,
    _next: NextFunction
): void {
    const status = error.status || 500; // Get the status code from the error or default to 500
    const message = error.message || 'Something went wrong'; // Get the error message or default message
    res.status(status).send({
        status,
        message,
    }); // Send the response with the status code and error message
}

export default errorMiddleware; // Export the middleware function
