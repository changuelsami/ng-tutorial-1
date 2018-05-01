import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor() { }

  getHeroes() {
    return [
      { id: '10', name: 'Superman' },
      { id: '12', name: 'Batman' },
      { id: '14', name: 'Flash' }
    ];
  }

}
