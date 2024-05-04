import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1_000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9_500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7_500
    }
  ];

  constructor() { }

  ngOnInit() { }

  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
