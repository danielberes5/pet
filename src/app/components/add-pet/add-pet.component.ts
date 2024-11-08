import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PetInterface} from "../../pet-interface";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  @Output()  onAddPet = new EventEmitter();

  breed:string;
  url:string;
  description:string;
  favorite:boolean = false;

  onSubmit(){
    const newPet = {
      breed : this.breed,
      url : this.url,
      description : this.description,
      favorite : this.favorite
    }

    this.onAddPet.emit(newPet);

    this.breed = "";
    this.url = "";
    this.description = "";
  }

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly onsubmit = onsubmit;
}
