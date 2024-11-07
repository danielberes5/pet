import {Component, OnInit, Input} from '@angular/core';
import {PetInterface} from "../../pet-interface";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{
  //title = "Pet component title"

  @Input() pet: PetInterface;

  onClick(){
    console.log("Favorite");
  }

  constructor() {
  }

  ngOnInit():void {
  }
}

