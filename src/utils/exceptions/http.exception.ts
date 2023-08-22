// Define a custom exception class named HttpException
class HttpException extends Error { // HttpException is extending the built-in 'Error'
    public status: number; // Define a property 'status' of type number
    public message: string; // Define a property 'message' of type string

    // Constructor to initialize properties
    constructor(status: number, message: string) {
        super(message); // Call the parent class (Error) constructor with the message
        this.status = status; // Set the status property
        this.message = message; // Set the message property
    }
}

// Export the HttpException class
export default HttpException;
