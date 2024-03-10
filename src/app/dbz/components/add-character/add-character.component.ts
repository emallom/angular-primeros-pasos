import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inferface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() {

    console.log(this.character);

    // validamos que el nombre no sea vacio:
    if (this.character.name.length === 0) return;

    // emitimos el nuevo personaje
    this.onNewCharacter.emit(this.character);

    // inicializamos el personaje
    this.character = {name: '', power: 0};

  }
}
