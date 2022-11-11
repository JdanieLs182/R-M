import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  personajes: Array<Personajes> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.httpClient.get("https://rickandmortyapi.com/api/character").subscribe({
      next: (response: any) => {
        console.log(response);
        this.personajes = response.results;
      },
      error: (err) => { console.log(err) }
    });
  }


}
export class Personajes {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: [];
  name: string;
  origin: [];
  species: string;
  status: string;
  type: string;
  url: string;
}