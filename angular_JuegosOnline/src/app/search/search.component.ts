import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  games: any = { results: [] }; // Aquí debes cargar los juegos desde tu servicio o fuente de datos

  filteredGames: any[] = this.games.results; // Inicialmente, muestra todos los juegos

  onInputChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filterItems(searchTerm);
  }

  filterItems(searchTerm: string) {
    if (searchTerm.trim() === '') {
      this.filteredGames = this.games.results; // Mostrar todos los juegos si no hay término de búsqueda
    } else {
      this.filteredGames = this.games.results.filter((game: { name: string }) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  clearSearch() {
    this.filteredGames = this.games.results;
  }
}
