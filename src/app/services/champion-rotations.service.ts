import { Injectable } from '@angular/core';
//importar http cliente
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionRotationsService {

  constructor(
    private http: HttpClient
  ) { }

  getChampionRotations(){
    return this.http.get("/lol/platform/v3/champion-rotations")
  }
}
