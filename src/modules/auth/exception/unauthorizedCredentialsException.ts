import { HttpException } from '@nestjs/common';
import { UNAUTHORIZED } from 'http-status';

export default class UnauthorizedCredentialsException extends HttpException {
  constructor(message: string) {
    super(message, UNAUTHORIZED);
  }
}
