// Import the Schema type from the mongoose library
import { Schema } from 'mongoose';

// Define an interface named Token that extends the base Object type
interface Token extends Object {
    id: Schema.Types.ObjectId; // Define a property 'id' of type ObjectId from mongoose Schema
    expiresIn: number; // Define a property 'expiresIn' of type number
}

export default Token; // Export the Token interface

/*
Interfaces are used to define the structure of objects in Typescript
In TypeScript, interfaces are a fundamental feature that define the shape of an object, specifying the names and types of its properties and optionally methods. 
They allow you to define contracts that objects must adhere to. 
Interfaces provide a way to enforce a consistent structure across different parts of your codebase and enable static type checking for your variables, functions, and classes.
*/