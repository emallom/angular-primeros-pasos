import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inferface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public character: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Son Gohan',
      power: 4500
    },
    {
      id: uuid(),
      name: 'Napa',
      power: 8000
    }
  ];

  addCharacter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = { ...character, id: uuid() };
    this.character.push(newCharacter);
  }

  deleteCharacter( id : string ): void {
    this.character = this.character.filter( character => character.id !== id);
  }

}
