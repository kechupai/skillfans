import { pick } from 'lodash';
import { ObjectId } from 'mongodb';

export interface ITokenPackage {
  _id: ObjectId;
  name: string;
  description: string;
  ordering: number;
  price: number;
  tokens: number;
  isActive: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export class TokenPackageDto {
  _id: ObjectId;

  name: string;

  description: string;

  ordering: number;

  price: number;

  tokens: number;

  isActive: boolean;

  updatedAt: Date;

  createdAt: Date;

  constructor(data: Partial<ITokenPackage>) {
    Object.assign(
      this,
      pick(data, [
        '_id',
        'name',
        'description',
        'ordering',
        'price',
        'tokens',
        'isActive',
        'updatedAt',
        'createdAt'
      ])
    );
  }

  toResponse() {
    return {
      _id: this._id,
      name: this.name,
      description: this.description,
      ordering: this.ordering,
      price: this.price,
      tokens: this.tokens,
      isActive: this.isActive,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt
    };
  }
}
