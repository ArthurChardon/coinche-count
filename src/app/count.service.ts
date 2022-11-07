import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountService {

  historique: ([string, number])[] = [];
  scores: BehaviorSubject<Map<string, number>> = new BehaviorSubject(new Map<string, number>());

  constructor() {
  }

  registerEntry(entry: number, player: string) {
    this.historique.push([player, entry]);
    this.updateScore(player, entry);
  }

  removeLastEntry() {
    if(this.historique.length) {
      let lastEntry = this.historique[-1];
      lastEntry[1] = -lastEntry[1];
      this.updateScore(...lastEntry)
      this.historique.pop();
    }
  }

  updateScore(player: string, entry: number) {
    if (this.scores.getValue().has(player)) {
      const currentScore = this.getScore(player);
      const newScores = this.scores.getValue().set(player, currentScore + entry);
      this.scores.next(newScores);
    }
    else {
      const newScores = this.scores.getValue().set(player, entry);
      this.scores.next(newScores);
    }
    localStorage.setItem(player, this.getScore(player).toString());
  }

  getFromStorage(player: string) {
    const playerScore = localStorage.getItem(player);
    if(playerScore) {
      this.scores.getValue().set(player, parseInt(playerScore));
    }
  } 

  getScore(player: string) {
    const score = this.scores.getValue().get(player)
    return score ? score : 0;
  }

  cancelLastEntry() {
      const lastEntry = this.historique.pop();
      if(lastEntry) {
        this.updateScore(lastEntry[0], -lastEntry[1]);
      }
  }
}
