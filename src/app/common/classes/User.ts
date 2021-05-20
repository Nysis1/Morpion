import { State } from './Enums';

export class User {
    State: State;
    Name: string;
  
    constructor(state: State, name:string) {
      this.State = state;
      this.Name = name;
    }
  
    getState(): State {
      return this.State;
    }
  
    getName(): string {
      return this.Name;
    }
  }