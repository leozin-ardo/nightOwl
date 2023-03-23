import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common';
import { TicketService } from './service';
import { buyTicketDTO } from './DTO/buyTicketDTO';
import { NO_CONTENT, CREATED } from 'http-status';

@Controller('ticket')
export class TicketController {
  constructor(private readonly TicketService: TicketService) {}

  @Get()
  getTicket(): string {
    return 'ticket';
  }

  @Post('/sold')
  async soldTicket(@Body() ticket: buyTicketDTO) {
    return await this.TicketService.buyTicket(ticket);
  }
}
