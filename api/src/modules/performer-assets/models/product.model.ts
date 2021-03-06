import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export class ProductModel extends Document {
  performerId: ObjectId;

  digitalFileId: ObjectId;

  imageId: ObjectId;

  type: string;

  name: string;

  slug: string;

  description: string;

  status: string;

  price: number;

  stock: number;

  stats: {
    likes: number;
    bookmarks: number;
    comments: number;
    views: number;
  };

  createdBy: ObjectId;

  updatedBy: ObjectId;

  createdAt: Date;

  updatedAt: Date;
}
