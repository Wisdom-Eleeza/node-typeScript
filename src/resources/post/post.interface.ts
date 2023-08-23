import { Document } from 'mongoose'; // Import the Document type from Mongoose

// Define the structure of a Post document, extending the Document type
export default interface Post extends Document {
    title: string; // Define a string property for the post title
    body: string; // Define a string property for the post body
}

/*
Creating this Post interface to ensure consistency and working with post documents throughout the application.
This interface helps improve code readability, type safety, and consistency when dealing with post data.
*/
