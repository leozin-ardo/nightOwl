import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TokenDocument = HydratedDocument<Token>;

@Schema()
export default class Token {
  @Prop()
  jwtToken: string;

  @Prop()
  expired_at: Date;

  @Prop()
  user_id: string;
}

export const tokenSchema = SchemaFactory.createForClass(Token);
