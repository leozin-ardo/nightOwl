import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { TicketService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import Ticket, { ticketSchema } from './schema/ticket';
import Event, { eventSchema } from '../event/schema/event';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: ticketSchema }]),
    MongooseModule.forFeature([{ name: Event.name, schema: eventSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
