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

}
