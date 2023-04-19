import Event from '../../event/domain/Event';

// TODO: change event to event_id after create event Controller.
export interface buyTicketDTO {
  user_id: string;
  event_id: string;
}
