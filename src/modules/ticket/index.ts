import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { TicketService } from './service';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
