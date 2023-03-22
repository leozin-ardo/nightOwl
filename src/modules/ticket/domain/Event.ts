import Local from './Local';

type Period = {
  start: Date;
  end: Date;
};

interface IEvent {
  readonly local: Local;
  readonly date: Date;
  readonly category: string;
  readonly period: Period;
}

export default class implements IEvent {
  readonly local: Local;
  readonly date: Date;
  readonly category: string;
  readonly period: Period;

  constructor(event: IEvent) {
    Object.assign(this, event);
  }
}
