import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  historique: ([string, number])[] = [];

  constructor() { }

  registerEntry(entry: number, player: string) {
    this.historique.push([player, entry]);
  }

  removeLastEntry() {
    this.historique.pop();
  }
}
