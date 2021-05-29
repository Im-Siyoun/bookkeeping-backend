import { model, Schema } from 'mongoose';

const BookSchema = new Schema(
    {
        title: { type: String, required: true },
        writer: { type: String, required: true },
        publisher_id: { type: String, required: true },
        file_path: { type: String },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const Book = model('Book', BookSchema);

export default Book;