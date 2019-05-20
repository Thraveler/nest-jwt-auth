import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {

  }

  @Post() 
  async create(@Body() createUserDto: UserDto) {
    console
    return await this.usersService.create(createUserDto);
  }

  @Get('test')
    @UseGuards(AuthGuard())
    testAuthRoute(){
        return {
            message: 'You did it!'
        }
    }

}
