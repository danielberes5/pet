import { Injectable } from '@angular/core';
import {FakeData} from "../fake-data";
import {PetInterface} from "../pet-interface";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const httOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url=environment.mockApi;

  constructor(private http: HttpClient) { }

  getPets() : Observable<PetInterface[]> {
    //const pets = of(FakeData);
    //return pets;

    return this.http.get<PetInterface[]>(this.url)
  }

  updatePetFavorite(pet:PetInterface):Observable<PetInterface> {
    const updateUrl = `$(this.url)/(pet.id)`;
    return this.http.put<PetInterface>(updateUrl, pet, httOption);
  }
}
