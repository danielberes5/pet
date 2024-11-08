import {Component, OnInit} from '@angular/core';
//import {FakeData} from "../../fake-data";
import {PetInterface} from "../../pet-interface";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: PetInterface[] = [];

  constructor(private petsService: PetService) {
  }

  ngOnInit(): void {
    this.petsService.getPets().subscribe(pets => this.pets = pets)
  }

  addFavorite(pet: PetInterface) {
    pet.favorite = !pet.favorite;
    this.petsService.updatePetFavorite(pet).subscribe();
  }

  deletePet(pet: PetInterface) {
    this.petsService.deletePet(pet).subscribe(() => this.pets = this.pets.filter(item => item.id !== pet.id));
  }

}
