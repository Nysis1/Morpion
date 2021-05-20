
import { Component, OnInit } from '@angular/core';

import { Morpion } from '../../common/classes/Morpion'
import { User } from './../../common/classes/User';
import { State } from './../../common/classes/Enums';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.scss'],
})
export class MorpionComponent implements OnInit {
  constructor() {}
  private game: Morpion;
  
  ngOnInit(): void {
    var playerOne = new User(State.cross, "cross");
    var playerSecond = new User(State.circle, "circle");
    this.game = new Morpion(playerOne, playerSecond);
  }

  text: string[] = new Array();
  btnClic(id:number): void {
    if (this.game.gameEnd != true) {
      this.text[id] = this.game.Turn.getName();
      this.game.setCase(id);
    }
  }
}