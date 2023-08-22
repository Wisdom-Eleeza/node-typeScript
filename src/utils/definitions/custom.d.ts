import User from '@/resources/user/user.interface'; // Import the User interface

// Declare a global augmentation for the Express namespace
declare global {
    // Open a declaration block for the global augmentation
    namespace Express {
        // Extend the Request interface within the Express namespace
        export interface Request {
            user: User; // Add a property 'user' of type User to the Request interface
        }
    }
    // Close the declaration block for the global augmentation
}

/*
The purpose of this custom type declaration is likely to add type information to the Request object in Express.js, indicating that it includes a user property of type User. 
This is often used in authentication middleware or route handlers to indicate that the Request object might contain user-related information after authentication.
*/