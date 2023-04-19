import { HttpException } from '@nestjs/common';
import { CONFLICT } from 'http-status';

export default class UserExistException extends HttpException {
  constructor(message: string) {
    super(message, CONFLICT);
  }
}
