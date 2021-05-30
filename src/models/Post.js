import { model, Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        Book_title: { type: String, require: true },
        Content: { type: String, require: true }
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const Post = model('post', PostSchema);

export default Post;