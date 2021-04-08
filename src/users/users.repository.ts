import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { IUsersRepository } from './interfaces/users.repository.interface';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UsersRepository
  extends Repository<UserEntity>
  implements IUsersRepository {
  public async findById(id: string): Promise<UserEntity> {
    return this.findOne({
      where: { id },
    });
  }

  public async findByEmail(email: string): Promise<UserEntity> {
    return this.findOne({
      where: { email },
    });
  }

  public async createUser({
    name,
    email,
    phone,
    password,
  }: UserDto): Promise<UserEntity> {
    const user = await this.create({
      name,
      email,
      phone,
      password,
    });

    await this.save(user);

    return user;
  }

  public async saveUser(user: UserEntity): Promise<UserEntity> {
    return this.save(user);
  }
}
