import { Schema, model } from 'mongoose'; // Import the Schema and model from Mongoose
import bcrypt from 'bcrypt'; // Import the bcrypt library for password hashing
import User from '@/resources/user/user.interface'; // Import the User interface

// Define the UserSchema using the Mongoose Schema constructor
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Enable automatic timestamp fields (createdAt, updatedAt)
);

// Define a pre-save hook to hash the password before saving
UserSchema.pre<User>('save', async function (next) {
    // Check if the password field is modified, if not, move to the next middleware
    if (!this.isModified('password')) {
        return next();
    }

    // Hash the password with bcrypt using 10 rounds of salting
    const hash = await bcrypt.hash(this.password, 10);

    // Set the hashed password in the model's password field
    this.password = hash;

    next();
});

// Define a method to check if a password is valid
UserSchema.methods.isValidPassword = async function (
    password: string
): Promise<Error | boolean> {
    // Compare the provided password with the stored hashed password using bcrypt
    return await bcrypt.compare(password, this.password);
};

// Create and export the User model based on the UserSchema
export default model<User>('User', UserSchema);
