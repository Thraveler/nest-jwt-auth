import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface } from './dto/interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<UserInterface>) {}

  async create(createUserDto: UserDto) {

    let createdUser = new this.userModel(createUserDto);
    return await createdUser.save();

  }

  async findOneByEmail(email): Model<UserInterface> {

    return await this.userModel.findOne({email: email});

  }

}
