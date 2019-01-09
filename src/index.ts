import { fromClass } from 'fw-model';

class Child {
  name: string;
  age: number;
  type: 'kid';
  constructor () {
    this.type = 'kid';
  }
}

class Family {
  surname: string;
  @fromClass kid1: Child;

  constructor (surname: string) {
    this.surname = surname;
  }
}

export default function () {
  const macFam = new Family('macGyver');
  console.log(macFam);
};
