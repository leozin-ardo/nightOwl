import { Module } from '@nestjs/common';
import { AuthController } from './controller';
import { AuthService } from './service';
import BcryptHashser from './useCases/bcryptHasher';
import { MongooseModule } from '@nestjs/mongoose';
import User, { userSchema } from './schema/user';
import Token, { tokenSchema } from './schema/token';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    MongooseModule.forFeature([{ name: Token.name, schema: tokenSchema }]),
    JwtModule.register({
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'HASHER',
      useClass: BcryptHashser,
    },
  ],
})
export class AuthModule {}
