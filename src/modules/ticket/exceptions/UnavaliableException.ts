import { HttpException } from '@nestjs/common';
import { NO_CONTENT } from 'http-status';

export default class UnavaliableException extends HttpException {
  constructor(message: string) {
    super(message, NO_CONTENT);
  }
}
