interface ILocal {
  readonly x: string;
  readonly y: string;
  readonly number: number;
  readonly zipcode: number;
  readonly complement?: string;
  readonly street: string;
  readonly state: string;
  readonly neighborhood: string;
}

export default class implements ILocal {
  readonly x: string;
  readonly y: string;
  readonly number: number;
  readonly zipcode: number;
  readonly complement?: string;
  readonly street: string;
  readonly state: string;
  readonly neighborhood: string;

  constructor(local: ILocal) {
    Object.assign(this, local);
  }
}
