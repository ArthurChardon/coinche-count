import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  historique: ([string, number])[] = [];

  constructor(private _countService: CountService) {
  }

  ngOnInit(): void {
    this._countService.scores.subscribe(() => {
      this.historique = this._countService.historique;
    })
  }

}
