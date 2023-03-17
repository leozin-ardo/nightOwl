import { Controller, Get } from '@nestjs/common';
import { TicketService } from './service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly TicketService: TicketService) {}


  @Get()
  getTicket():string {
    return "ticket"
  }
}
