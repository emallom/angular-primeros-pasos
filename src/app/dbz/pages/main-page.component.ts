import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.inferface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

 constructor(private dbzService: DbzService) {}

 get character(): Character[] {
  // devuelve una copia del array
  return [...this.dbzService.character];
 }

 deleteCharacter(id: string): void {
  this.dbzService.deleteCharacter(id);
 }

 addCharacter(character: Character): void {
  this.dbzService.addCharacter(character);
 }

}
