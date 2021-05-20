import { State } from './Enums';
import { User } from './User';


var combos = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];

export class Morpion {

    Turn: User;
    Winner: User;
    gameEnd:boolean;
    Cases: State[];
    Players: User[];
  
    constructor(playerOne: User, playerTwo: User) {
      console.log(playerOne, playerTwo)
      this.Players = new Array();
      this.Cases = new Array();
      this.gameEnd = false;
  
      this.Players.push(playerOne);
      this.Players.push(playerTwo);
      this.Turn = playerOne;
  
      for (var i = 0; i < 9; i++) {
        this.Cases[i] = State.empty;
      }
    }
  
    setCase(caseNumber: number): void {
      this.Cases[caseNumber] = this.Turn.getState();
      this.verifyTurnEvent();
      switch(this.Turn) {
        case this.Players[0] : 
          this.Turn = this.Players[1];
          break;
        case this.Players[1] : 
          this.Turn = this.Players[0];
          break;
      }
    }
  
    verifyTurnEvent() {
      combos.forEach(element => {
        var resultPlayerOne = this.verifyCombo(this.Players[0].getState(), this.Cases[0], this.Cases[1], this.Cases[2]);
        var resultPlayerTwo = this.verifyCombo(this.Players[1].getState(), this.Cases[0], this.Cases[1], this.Cases[2]);
  
        if (resultPlayerOne == true) {
          this.endParty(this.Players[0]);
        }
        if (resultPlayerTwo == true) {
          this.endParty(this.Players[1]);
        }
      });
      
    }
  
    verifyCombo(playerState: State, firstState: State, secondState: State, thirdState: State): boolean {
      if (firstState == playerState && secondState == playerState && thirdState == playerState) {
        return true;
      }
      else {
        return false;
      }
    }
  
    endParty(winner: User) {
      this.Winner = winner;
      this.gameEnd = true;
      console.log(winner.Name);
    }
  }