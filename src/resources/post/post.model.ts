import { Schema, model } from 'mongoose'; // Import necessary modules
import Post from '@/resources/post/post.interface'; // Import the Post interface

// Define the PostSchema using the Mongoose Schema constructor
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Create and export the Post model using the PostSchema
export default model<Post>('Post', PostSchema);
