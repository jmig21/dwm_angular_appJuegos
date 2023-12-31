import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';

@NgModule({

  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent,
    MenuNavegacionComponent,
    ModalComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
