import { Request, Response, NextFunction } from 'express'; // Import necessary modules and types
import token from '@/utils/token'; // Import the token utility
import UserModel from '@/resources/user/user.model'; // Import the UserModel
import Token from '@/utils/interfaces/token.interface'; // Import the Token interface
import HttpException from '@/utils/exceptions/http.exception'; // Import the HttpException class
import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library

async function authenticatedMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith('Bearer ')) {
        return next(new HttpException(401, 'Unauthorised')); // Return unauthorized response if no or invalid bearer token
    }

    const accessToken = bearer.split('Bearer ')[1].trim();
    try {
        const payload: Token | jwt.JsonWebTokenError = await token.verifyToken(
            accessToken
        );

        if (payload instanceof jwt.JsonWebTokenError) {
            return next(new HttpException(401, 'Unauthorised')); // Return unauthorized response if token verification fails
        }

        const user = await UserModel.findById(payload.id)
            .select('-password')
            .exec();

        if (!user) {
            return next(new HttpException(401, 'Unauthorised')); // Return unauthorized response if user is not found
        }

        req.user = user; // Attach the user object to the request

        return next(); // Move to the next middleware or route handler
    } catch (error) {
        return next(new HttpException(401, 'Unauthorised')); // Handle unexpected errors with unauthorized response
    }
}

export default authenticatedMiddleware; // Export the middleware function
