import { Document } from 'mongoose'; // Import the Document type from Mongoose

// Define the User interface, extending the Document type from Mongoose
interface User extends Document {
    email: string;
    name: string;
    password: string;
    role: string;

    isValidPassword(password: string): Promise<Error | boolean>;
}

export default User;

/*
This means that the User interface inherits the properties and methods provided 
by the Document type and adds additional properties and methods specific to the user data structure.
*/
