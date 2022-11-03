import { Component } from '@angular/core';
import { DialogsService, DialogScoreMode } from './dialogs/dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coinche-count';

  ModeEnum = DialogScoreMode;

  constructor( private _dialogsService: DialogsService) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      if(!_dialogsService.isDialogOpened()) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    });
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
}
