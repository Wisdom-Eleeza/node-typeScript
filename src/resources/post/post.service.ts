import PostModel from '@/resources/post/post.model'; // Import the PostModel
import Post from '@/resources/post/post.interface'; // Import the Post interface

// Create a class named PostService
class PostService {
    private post = PostModel; // Create an instance of the PostModel

    // Method to create a new post
    public async create(title: string, body: string): Promise<Post> {
        try {
            // Call the create method of the PostModel to create a new post
            const post = await this.post.create({ title, body });

            return post; // Return the created post
        } catch (error) {
            throw new Error('Unable to create post'); // Handle errors by throwing an error
        }
    }
}

export default PostService; // Export the PostService class
