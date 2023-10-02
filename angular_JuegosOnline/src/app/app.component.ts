import { Component, OnInit } from '@angular/core';
import { GetGameDataService } from './services/get-game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DWM 2023';

  constructor( private gameService: GetGameDataService) {
    
  }

  games: [] = [];
  
  ngOnInit(): void {
    this.getGameData();
  }

  getGameData(): any {
    
    return this.gameService.getGameData().subscribe((games:any) => this.games = games )
  }
}
