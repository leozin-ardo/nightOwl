import { Controller, Get } from '@nestjs/common';
import { AuthService } from './service';

@Controller('auth')
export class TicketController {
  constructor(private readonly AuthService: AuthService) {}

  @Get()
  getTicket(): string {
    return 'safe';
  }
}
