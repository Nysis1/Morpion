import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.scss'],
})
export class MorpionComponent implements OnInit {
  constructor() {}
  private game: Party;
  
  ngOnInit(): void {
    var playerOne = new Player(state.cross, "cross");
    var playerSecond = new Player(state.circle, "circle");
    this.game = new Party(playerOne, playerSecond);
  }

  text: string[] = new Array();
  btnClic(id:number): void {
    if (this.game.gameEnd != true) {
      this.text[id] = this.game.Turn.getName();
      this.game.setCase(id);
    }
  }
}

enum state { empty, cross, circle};
var combos = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];

class Party {

  Turn: Player;
  Winner: Player;
  gameEnd:boolean;
  Cases: state[];
  Players: Player[];

  constructor(playerOne: Player, playerTwo: Player) {
    console.log(playerOne, playerTwo)
    this.Players = new Array();
    this.Cases = new Array();
    this.gameEnd = false;

    this.Players.push(playerOne);
    this.Players.push(playerTwo);
    this.Turn = playerOne;

    for (var i = 0; i < 9; i++) {
      this.Cases[i] = state.empty;
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

  verifyCombo(playerState: state, firstState: state, secondState: state, thirdState: state): boolean {
    if (firstState == playerState && secondState == playerState && thirdState == playerState) {
      return true;
    }
    else {
      return false;
    }
  }

  endParty(winner: Player) {
    this.Winner = winner;
    this.gameEnd = true;
    console.log(winner.Name);
  }
}

class Player {
  State: state;
  Name: string;

  constructor(state: state, name:string) {
    this.State = state;
    this.Name = name;
  }

  getState(): state {
    return this.State;
  }

  getName(): string {
    return this.Name;
  }
}