import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PetComponent} from "./components/pet/pet.component";
import {PetsComponent} from "./components/pets/pets.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";

const routes: Routes = [
  { path: '', component: PetsComponent},
  { path: 'about', component: AboutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
