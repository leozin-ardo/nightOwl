import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common';
import { TicketService } from './service';
import { buyTicketDTO } from './DTO/buyTicketDTO';
import { NO_CONTENT, CREATED } from 'http-status';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  
  @Post('/sold')
  async soldTicketRoute(@Body() ticket: buyTicketDTO) {
    return await this.ticketService.buyTicket(ticket);
  }
}
