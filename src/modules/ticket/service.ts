import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import TicketSchema, { TicketDocument } from './schema/ticket';
import EventSchema, { EventDocument } from '../event/schema/event';

import Ticket from './domain/Ticket';
import Event from '../event/domain/Event';

import { buyTicketDTO } from './DTO/buyTicketDTO';
import UnavaliableException from './exceptions/UnavaliableException';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(TicketSchema.name) private ticketModel: Model<TicketDocument>,
    @InjectModel(EventSchema.name) private eventModel: Model<EventDocument>,
  ) {}

  buyTicket = async (
    ticketDTO: buyTicketDTO,
  ): Promise<Ticket | HttpException> => {
    try {
      const eventId = ticketDTO?.event_id;

      const findEvent = await this.eventModel
        .findOne({ identifier: eventId })
        .exec();

      if (findEvent) {
        const event = new Event({ ...findEvent });

        const eventEndTime = findEvent?.period?.end;
        const ticketIsAvaliable: boolean = new Date(eventEndTime) > new Date();

        if (ticketIsAvaliable) {
          const newTicket = new Ticket({
            ...ticketDTO,
            event,
            expiration_date: eventEndTime,
          });

          const soldTicket = new this.ticketModel(newTicket);
          soldTicket.save();

          return newTicket;
        }
      }

      throw new UnavaliableException('Event already finish');
    } catch (err) {
      throw err;
    }
  };
}
