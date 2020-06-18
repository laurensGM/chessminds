import { Component, OnInit } from '@angular/core';
import { Checkmatepattern } from '../shared/checkmatepattern';
import { CHECKMATEPATTERNS } from '../shared/checkmatepatterns';

declare var ChessBoard: any;

@Component({
  selector: 'app-matingpatterns',
  templateUrl: './matingpatterns.page.html',
  styleUrls: ['./matingpatterns.page.scss'],
})
export class MatingpatternsPage implements OnInit {
  checkmatepatterns: Checkmatepattern[] = CHECKMATEPATTERNS;

  selectedCheckmatepattern = CHECKMATEPATTERNS[3];

  board:any;

  constructor() { }

  ngOnInit() {
    this.board = ChessBoard('board1', {
      position: this.checkmatepatterns[2].FEN,
      draggable: true
    });
  }

}
