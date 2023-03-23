import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Event from '../domain/Event';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;


@Schema()
export default class Ticket {
  @Prop()
  event: Event;

  @Prop()
  expiration_date: Date;

  @Prop()
  user_id: string;
}

export const ticketSchema = SchemaFactory.createForClass(Ticket);
