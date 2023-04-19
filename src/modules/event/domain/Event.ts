import Local from './Local';
import { randomUUID } from 'crypto';

export type Period = {
  start: Date;
  end: Date;
};

export type Batch = {
  price: number;
  expiration_date: Date;
  id: string;
};

interface IEvent {
  readonly local: Local;
  readonly date: Date;
  readonly category: string;
  readonly period: Period;
  readonly batches: Batch[];
  readonly identifier: string;
}

export default class implements IEvent {
  readonly local: Local;
  readonly date: Date;
  readonly category: string;
  readonly period: Period;
  readonly batches: Batch[];
  readonly identifier = randomUUID(); // This dependency should be excluded in the future.

  constructor(event: IEvent) {
    Object.assign(this, event);
  }
}
