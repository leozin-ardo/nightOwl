import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { TicketModule } from '../ticket/index';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth';
import { EventModule } from '../event';

@Module({
  imports: [
    EventModule,
    TicketModule,
    ConfigModule.forRoot({ envFilePath: './dev.env' }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
