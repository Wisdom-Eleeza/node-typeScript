import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library
import User from '@/resources/user/user.interface'; // Import the User interface
import Token from '@/utils/interfaces/token.interface'; // Import the Token interface

// Function to create a JWT token for a user
export const createToken = (user: User): string => {
    // Use jwt.sign to create a token with user's ID and a secret key
    // Set an expiration time of 1 day (24 hours)
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: '1d',
    });
};

// Function to verify a JWT token
export const verifyToken = async (
    token: string
): Promise<jwt.VerifyErrors | Token> => {
    // Return a promise that handles verification using jwt.verify
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET as jwt.Secret, // Verify using the secret key
            (err, payload) => {
                if (err) return reject(err); // If error, reject the promise

                resolve(payload as Token); // Resolve with the token payload
            }
        );
    });
};

// Export an object containing the createToken and verifyToken functions
export default { createToken, verifyToken };
