import Event from "../domain/Event";

// TODO: change event to event_id after create event Controller.
export type buyTicketDTO = {
  user_id: string;
  event: Event;
};
