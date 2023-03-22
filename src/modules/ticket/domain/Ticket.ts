import Event from './Event';

interface IEvent {
  readonly event: Event;
  readonly expiration_date: Date;
  readonly user_id: string;
}

export default class implements IEvent {
  readonly event: Event;
  readonly expiration_date: Date;
  readonly user_id: string;

  constructor(event: IEvent) {
    Object.assign(this, event);
  }
}
