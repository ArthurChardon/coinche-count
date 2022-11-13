import { Component, OnInit } from '@angular/core';
import { DialogsService, DialogScoreMode } from '../dialogs/dialogs.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-cards-main',
  templateUrl: './cards-main.component.html',
  styleUrls: ['./cards-main.component.scss']
})
export class CardsMainComponent implements OnInit {
  ModeEnum = DialogScoreMode;

  constructor(private _dialogsService: DialogsService, private _countService: CountService) {
  }

  ngOnInit(): void {
  }

  setDisplayMode(mode: DialogScoreMode) {
    this._dialogsService.setMode(mode);
  }

  getMode(): DialogScoreMode {
    return this._dialogsService.mode;
  }

  isMode(mode: DialogScoreMode) {
    return this.getMode() === mode;
  }

  cancelLastEntry() {
    this._countService.cancelLastEntry();
  }

  resetScores() {
    this._countService.resetScores();
  }
}
