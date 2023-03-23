import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import TicketSchema, { TicketDocument } from './schema/ticket';
import Ticket from './domain/Ticket';
import { buyTicketDTO } from './DTO/buyTicketDTO';
import UnavaliableException from './exceptions/UnavaliableException';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(TicketSchema.name) private ticketModel: Model<TicketDocument>,
  ) {}

  buyTicket = async (
    ticketDTO: buyTicketDTO,
  ): Promise<Ticket | HttpException> => {
    try {
      const event = ticketDTO?.event;
      const eventEndTime = event?.period?.end;
      const ticketIsAvaliable: boolean = new Date(eventEndTime) > new Date();

      if (ticketIsAvaliable) {
        const newTicket = new Ticket({
          ...ticketDTO,
          expiration_date: eventEndTime,
        });
        const soldTicket = new this.ticketModel(newTicket);
        soldTicket.save();
        return newTicket;
      }

      throw new UnavaliableException('Event already finish');
    } catch (err) {
      throw err;
    }
  };
}
