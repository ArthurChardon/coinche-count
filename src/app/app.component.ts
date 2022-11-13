import { Component } from '@angular/core';
import { DialogsService, DialogScoreMode } from './dialogs/dialogs.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coinche-count';

  ModeEnum = DialogScoreMode;

  constructor( private _dialogsService: DialogsService, private _countService: CountService) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      if(!_dialogsService.isDialogOpened()) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    });
  }

  cancelLastEntry() {
    this._countService.cancelLastEntry();
  }
}
