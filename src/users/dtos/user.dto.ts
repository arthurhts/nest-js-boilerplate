import { IUser } from './../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements IUser {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;
}
