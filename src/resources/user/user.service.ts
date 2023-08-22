import UserModel from '@/resources/user/user.model'; // Import the UserModel
import token from '@/utils/token'; // Import the token utility

// Create a class named UserService
class UserService {
    private user = UserModel; // Create an instance of the UserModel

    /**
     * Register a new user
     */
    public async register(
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<string | Error> {
        try {
            // Create a new user using the UserModel
            const user = await this.user.create({
                name,
                email,
                password,
                role,
            });

            // Generate an access token using the token utility
            const accessToken = token.createToken(user);

            return accessToken; // Return the access token
        } catch (error: any) {
            throw new Error(error.message); // Throw an error if registration fails
        }
    }

    /**
     * Attempt to login a user
     */
    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            // Find the user using the UserModel based on the email
            const user = await this.user.findOne({ email });

            if (!user) {
                throw new Error('Unable to find user with that email address');
            }

            // Check if the provided password is valid for the user
            if (await user.isValidPassword(password)) {
                return token.createToken(user); // Generate an access token if the password is valid
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error) {
            throw new Error('Unable to create user'); // Throw an error if login fails
        }
    }
}

export default UserService;
