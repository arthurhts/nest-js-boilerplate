import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async authenticate(email: string, password: string): Promise<IUser> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Incorrect email/password combination.');
    }

    //const passwordMatched = await compare(password, user.password);

    if (user.password !== password) {
      throw new UnauthorizedException('Incorrect email/password combination.');
    }

    return user;
  }

  public async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
