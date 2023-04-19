import { Inject, Injectable } from '@nestjs/common';
import IHash from './domain/Ihash';
import { InjectModel } from '@nestjs/mongoose';
import UserSchema, { UserDocument } from './schema/user';
import TokenSchema, { TokenDocument } from './schema/token';
import { Model } from 'mongoose';
import RegisterUserDTO from './DTO/registerUserDTO';
import User from './domain/user';
import UserExistException from './exception/userExistException';
import { JwtService } from '@nestjs/jwt';
import UnauthorizedCredentialsException from './exception/unauthorizedCredentialsException';
import { AuthDTO } from './DTO/authDTO';

@Injectable()
export class AuthService {
  constructor(
    @Inject('HASHER') private readonly hash: IHash,
    @InjectModel(UserSchema.name) private userModel: Model<UserDocument>,
    @InjectModel(TokenSchema.name) private tokenModel: Model<TokenDocument>,
    private jwtService: JwtService,
  ) {}

  authenticate = async (user: AuthDTO) => {
    try {
      const { password, username } = user || {};
      const findUser = await this.userModel.findOne({ username });

      if (findUser.username) {
        const isTheSamePass = this.hash.compare({
          text: password,
          hashTextToCompare: findUser.password,
        });

        if (isTheSamePass)
          this.jwtService.signAsync(JSON.stringify(new User(findUser)), {
            secret: process.env.JWT_SECRET,
            expiresIn: '7d',
          });
        else throw new UnauthorizedCredentialsException('Password wrong');
      }
    } catch (err) {
      throw err;
    }
  };

  createUser = async (user: RegisterUserDTO) => {
    try {
      const userExist = await this.userModel.findOne({
        username: user.username,
      });

      if (!userExist) {
        const { password } = user;
        delete user.password;

        const hashedPassword = this.hash.encrypt({
          textToEncrypt: password,
          roundsToSalt: Number(process.env.SALT_ROUNDS),
        });

        const newUser = new User({ password: hashedPassword, ...user });

        const createUser = new this.userModel(newUser);
        await createUser.save();
        return newUser;
      }

      throw new UserExistException('user already created');
    } catch (err) {
      throw err;
    }
  };
}
