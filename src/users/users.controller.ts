import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() data: UserDto): Promise<IUser> {
    return await this.userService.create(data);
  }
}
