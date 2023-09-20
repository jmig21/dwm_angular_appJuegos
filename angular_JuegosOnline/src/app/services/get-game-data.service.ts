import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetGameDataService {

  constructor( private http: HttpClient ) { }

  private gamesData = 'https://api.rawg.io/api/games';  
  private apyKey = '882662ee873446718ae2ba2a4f6b573f';


  getGameData():any {
    return this.http.get<any>(this.gamesData +'?key=' + this.apyKey)
  }
}
