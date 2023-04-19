import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import Local from '../domain/Local';
import { Batch } from '../domain/Event';
import { Period } from '../domain/Event';

export type EventDocument = HydratedDocument<EventSchema>;

@Schema()
export default class EventSchema {
  @Prop()
  local: Local;

  @Prop()
  date: Date;

  @Prop()
  category: string;

  @Prop({ type: 'Mixed' })
  period: Period;

  @Prop()
  batches: Batch[];

  @Prop()
  identifier: string;
}

export const eventSchema = SchemaFactory.createForClass(EventSchema);
