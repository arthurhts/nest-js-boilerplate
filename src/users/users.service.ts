import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from './interfaces/user.interface';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  public async findById(id: string): Promise<IUser | undefined> {
    return await this.usersRepository.findById(id);
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    return await this.usersRepository.findByEmail(email);
  }

  public async create({
    name,
    email,
    phone,
    password,
  }: IUser): Promise<IUser | undefined> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new ConflictException('Email address already used.');
    }

    //const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.createUser({
      name,
      email,
      phone,
      password,
    });

    return user;
  }
}
