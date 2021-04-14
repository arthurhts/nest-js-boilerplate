import { UserEntity } from '../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_USERNAME,
      port: Number(process.env.TYPEORM_HOST),
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      entities: [UserEntity],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
