import { Module } from '@nestjs/common';
import { EventController } from './controller';
import { EventService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import Event, { eventSchema } from './schema/event';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: eventSchema }]),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
