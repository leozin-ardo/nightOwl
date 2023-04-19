import Event from '../../event/domain/Event';

interface ITicket {
  readonly event: Event;
  readonly expiration_date: Date;
  readonly user_id: string;
}

export default class implements ITicket {
  readonly event: Event;
  readonly expiration_date: Date;
  readonly user_id: string;

  constructor(ticket: ITicket) {
    Object.assign(this, ticket);
  }
}
