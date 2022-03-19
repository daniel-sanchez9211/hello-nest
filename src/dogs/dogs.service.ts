import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './entities/dog.entity';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}


  create(createDogDto: CreateDogDto) {
    const dog = new this.dogModel(createDogDto)
    return dog.save()
  }

  findAll() {
    return this.dogModel.find().sort('name');
  }

  findOne(id: string) {
    return this.dogModel.findById(id);
  }

  update(id: string, updateDogDto: UpdateDogDto) {
    return this.dogModel.findByIdAndUpdate({
      _id: id,
    },
    {
      $set: updateDogDto
    },
    {
      new: true,
    })
  }

  remove(id: string) {
    return this.dogModel.deleteOne({
      _id: id,
    }).exec();
  }
}
