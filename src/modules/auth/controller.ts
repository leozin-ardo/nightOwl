import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './service';
import { AuthDTO } from './DTO/authDTO';
import RegisterUserDTO from './DTO/registerUserDTO';

@Controller('/auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('/login')
  async authenticateRoute(@Body() bodyPayload: AuthDTO) {
    return this.AuthService.authenticate(bodyPayload);
  }

  @Post('/register')
  async registerUserRoute(@Body() bodyPayload: RegisterUserDTO) {
    return this.AuthService.createUser(bodyPayload);
  }
}
