import mongoose, { Schema, Document, Model } from "mongoose";

interface IBlog extends Document {
  title: string;
  description: string;
  author: string;
  imageSrc: string;
  category: string;
  createdAt?: Date;
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    imageSrc: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
