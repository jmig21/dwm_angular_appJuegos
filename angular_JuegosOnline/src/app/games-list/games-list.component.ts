import { Component, Input, OnInit } from '@angular/core';
import { GetGameDataService } from '../services/get-game-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {

  game: any;
  @Input() games: any;
}

