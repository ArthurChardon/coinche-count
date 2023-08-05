import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { first } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DialogScoreComponent } from '../../dialogs/dialog-score/dialog-score.component';
import { DialogsService } from '../../dialogs/dialogs.service';
import { CountService } from '../../count.service';
@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss'],
  host: {
    '[style.background-color]': 'color',
  },
})
export class CountCardComponent implements OnInit, AfterViewChecked {
  @Input() color = 'red';
  @Input() cardTitle = 'Title';
  count: number = 0;

  constructor(
    public dialog: MatDialog,
    private _dialogsService: DialogsService,
    private _countService: CountService
  ) {}

  ngOnInit(): void {
    this._countService.getFromStorage(this.cardTitle);
    this._countService.scores.subscribe((data) => {
      const score = data.get(this.cardTitle);
      this.count = score ? score : 0;
    });
  }

  ngAfterViewChecked(): void {
    this.scaleFontSize();
  }

  decrement() {
    this._countService.registerEntry(-10, this.cardTitle);
  }

  increment() {
    this._countService.registerEntry(10, this.cardTitle);
  }

  openDialog() {
    this._dialogsService.openDialog();
    const dialogRef = this.dialog.open(DialogScoreComponent, {
      autoFocus: '.score-input',
      data: { title: this.cardTitle, count: this.count },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((result) => {
        this._dialogsService.closeDialog();
        if (parseInt(result)) {
          this._countService.registerEntry(parseInt(result), this.cardTitle);
        }
      });
  }

  resetScore() {
    this._countService.resetScore(this.cardTitle);
  }

  scaleFontSize() {
    var container = document.getElementById(this.cardTitle + '-count');
    if (container) {
      container.style.fontSize = '100%';
      if (container.parentElement) {
        if (container.clientWidth > container.parentElement.clientWidth * 0.6) {
          container.style.fontSize = '70%';
        }
      }
    }
  }
}
