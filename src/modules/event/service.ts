import { InjectModel } from '@nestjs/mongoose';
import { createEventDTO } from './DTO/createEventDTO';
import EventSchema, { EventDocument } from './schema/event';
import { Model } from 'mongoose';
import Event from './domain/Event';

export class EventService {
  constructor(
    @InjectModel(EventSchema.name) private eventModel: Model<EventDocument>,
  ) {}

  createEvent = async (createEventBody: createEventDTO) => {
    try {
      const newEvent = new Event({ ...createEventBody });

      const createEvent = new this.eventModel(newEvent);
      createEvent.save();

      return createEvent;
    } catch (err) {
      console.log(err);
    }
  };
}
