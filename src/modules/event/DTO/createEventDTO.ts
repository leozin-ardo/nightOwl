import { Period, Batch } from '../domain/Event';
import Local from '../domain/Local';

export interface createEventDTO {
  local: Local;
  date: Date;
  category: string;
  period: Period;
  batches: Batch[];
  identifier: string;
}
