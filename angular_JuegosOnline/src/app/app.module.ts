import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';

@NgModule({

  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
