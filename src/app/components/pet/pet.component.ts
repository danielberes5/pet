import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PetInterface} from "../../pet-interface";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{
  //title = "Pet component title"

  @Input() pet: PetInterface;

  @Output() onAddFavorite: EventEmitter<PetInterface> = new EventEmitter();

  onFavorite(){
    console.log("Favorite");
    this.onAddFavorite.emit();
  }

  constructor() {
  }

  ngOnInit():void {
  }
}

