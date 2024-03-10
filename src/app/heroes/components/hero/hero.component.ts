import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  // propiedad como name y age
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 19;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 25;
  }



}
