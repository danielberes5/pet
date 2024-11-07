import {Component, OnInit} from '@angular/core';
import {FakeData} from "../../fake-data";
import {PetInterface} from "../../pet-interface";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: PetInterface[] = FakeData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
