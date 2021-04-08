import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../user.entity';

export interface IUsersRepository {
  findById(id: string): Promise<UserEntity | undefined>;
  findByEmail(email: string): Promise<UserEntity | undefined>;
  createUser(data: UserDto): Promise<UserEntity | undefined>;
  saveUser(user: UserEntity): Promise<UserEntity>;
}
