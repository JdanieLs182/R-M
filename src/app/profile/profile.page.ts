import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Personajes } from '../users/users.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  idPersonaje = '';
  personaje: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.idPersonaje = this.activatedRoute.snapshot.paramMap.get('id');
    this.obtenerDetalle();

  }
  obtenerDetalle() {
    this.httpClient.get("https://rickandmortyapi.com/api/character/" + this.idPersonaje).subscribe({
      next: (response: any) => {
        this.personaje = response;
        console.log(response);
      },
      error: (err) => { }
    })
  }
}
