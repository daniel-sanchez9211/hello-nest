import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Owner, OwnerDocument } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) {}


  create(createOwnerDto: CreateOwnerDto) {
    const owner = new this.ownerModel(createOwnerDto)
    return owner.save()
  }

  findAll() {
    return this.ownerModel.find().sort('name');
  }

  findOne(id: string) {
    return this.ownerModel.findById(id);
  }

  update(id: string, updateOwnerDto: UpdateOwnerDto) {
    return this.ownerModel.findByIdAndUpdate({
      _id: id,
    },
    {
      $set: updateOwnerDto
    },
    {
      new: true,
    })
  }

  remove(id: string) {
    return this.ownerModel.deleteOne({
      _id: id,
    }).exec();
  }

  findDogs(id: string) {
    return this.ownerModel.find().sort('name');
  }
}
