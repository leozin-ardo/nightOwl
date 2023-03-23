import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { TicketService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import Ticket, { ticketSchema } from './schema/ticket';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: ticketSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
