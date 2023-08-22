import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';
import { number, string } from 'joi';

const PostSchema = new Schema(
    {
        title: {
            type: string,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Post>('Post', PostSchema);
