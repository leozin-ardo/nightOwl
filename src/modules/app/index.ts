import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { TicketModule } from '../ticket/index';

@Module({
  imports: [TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
